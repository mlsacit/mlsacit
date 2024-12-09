import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const auth = new GoogleAuth({
        credentials: {
            type: 'service_account',
            project_id: process.env.GOOGLE_PROJECT_ID,
            private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID?.replace(/\\n/g, '\n'),
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
            auth_uri: process.env.GOOGLE_AUTH_URI,
            token_uri: process.env.GOOGLE_TOKEN_URI,
            auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
            client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_ATTENDANCE_SHEET_ID;
    const answersRange = 'Answers!A2:C';
    const questionsRange = 'Questions!A2:F';

    try {
        const { usn, email, answers } = await req.json();
        
        if (!usn || !email || !answers || typeof answers !== 'object') {
            throw new Error('Invalid input data.');
        }

        // Check for duplicate email
        const { data: existingData } = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: answersRange,
        });

        const existingRows = existingData.values || [];
        const duplicateEntry = existingRows.find((row) => row[1]?.toLowerCase() === email.toLowerCase());

        if (duplicateEntry) {
            return NextResponse.json(
                { message: 'This email has already been used to submit the quiz.' },
                { status: 400 }
            );
        }

        const duplicateUsn = existingRows.find((row) => row[0]?.toLowerCase() === usn.toLowerCase());
        if (duplicateUsn) {
            return NextResponse.json(
                { message: 'This USN has already been used to submit the quiz.' },
                { status: 400 }
            );
        }

        // Fetch questions from the spreadsheet
        const { data: questionData } = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: questionsRange,
        });

        const questions = questionData.values;
        if (!questions || questions.length === 0) {
            throw new Error('No questions found in the spreadsheet.');
        }

        let correctAnswersCount = 0;

        questions.forEach(([question, opt1, opt2, opt3, opt4, correctOption], index) => {
            const questionKey = `question-${index + 1}`;
            const userAnswer = answers[questionKey]; 
            
            if (userAnswer && userAnswer.trim().toUpperCase() === correctOption.trim().toUpperCase()) {
                correctAnswersCount += 1;
            }
        });

        const resultRow = [[usn, email, correctAnswersCount]];

        // Append the user's result
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: answersRange,
            valueInputOption: 'RAW',
            resource: { values: resultRow },
        });

        return NextResponse.json(
            { message: 'Result submitted successfully', result: correctAnswersCount },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

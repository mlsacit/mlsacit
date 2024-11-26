import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function GET() {
    const auth = new GoogleAuth({
        credentials: {
          type: 'service_account',
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
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
    const range = 'Questions!A2:E';
    const timerRange = 'Questions!H7';


    try {
        const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
        const rows = response.data.values || [];

        const questions = rows.map((row, index) => ({
            id: `question-${index + 1}`,
            question: row[0],
            options: [row[1], row[2], row[3],row[4]],
        }));

        const timerResponse = await sheets.spreadsheets.values.get({ spreadsheetId, range: timerRange });
        const timerValue = timerResponse.data.values?.[0]?.[0];

        return NextResponse.json({ questions, timer: parseInt(timerValue, 10) || 30 }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

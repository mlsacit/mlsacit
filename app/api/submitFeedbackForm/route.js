import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GoogleAuth } from 'google-auth-library';
import { NextResponse } from 'next/server';

// Load environment variables
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

export async function POST(req) {
  try {
    const body = await req.json();

    const auth = new GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(SHEET_ID, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // First sheet

    // Append feedback form data
    await sheet.addRow({
      Name: body.name,
      USN: body.usn,
      Branch: body.branch,
      CollegeEmail: body.collegeMail,
      Q1: body.q1,
      Q2: body.q2,
      Q3: body.q3,
      Q4: body.q4,
      Q5: body.q5,
      Q6: body.q6,
      Q7: body.q7,
      Q8: body.q8,
      Q8Comment: body.q8comment || ''
    });

    return NextResponse.json({ message: 'Feedback submitted successfully!' }, { status: 201 });

  } catch (error) {
    console.error('Error saving feedback:', error);
    return NextResponse.json({ error: 'Failed to submit feedback.' }, { status: 500 });
  }
}

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

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
  const range = 'Active!A2:J';
  const formData = await req.json(); 

  const {
    name, usn, branch, semester, section, collegeMail, feedback1, feedback2, feedback3
  } = formData;

  let emailUsed = collegeMail;

  if (collegeMail && !collegeMail.includes('@')) {
    emailUsed = `${collegeMail}@cambridge.edu.in`;
  }

  try {
    // Retrieve the data from columns A to J (including feedback columns)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Active!A2:J', 
    });

    const rows = response.data.values || [];
    const usnRow = rows.find(row => row[2] === usn); // Find the row where the USN matches

    if (!usnRow) {
      return NextResponse.json({ message: 'Invalid Access: USN not found' }, { status: 400 });
    }

    // Check if feedback columns (H, I, J) are already filled
    const feedbackAlreadySubmitted = usnRow[7] && usnRow[8] && usnRow[9]; // Check if feedback1, feedback2, feedback3 are filled

    if (feedbackAlreadySubmitted) {
      return NextResponse.json({ message: 'Feedback already submitted for this USN' }, { status: 400 });
    }

    // Prepare row data for feedback submission
    const rowData = [
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
      name, usn, branch, semester, section, emailUsed, feedback1, feedback2, feedback3
    ];

    // Update the row with the feedback data
    const updateResponse = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Active!A${rows.indexOf(usnRow) + 2}:J${rows.indexOf(usnRow) + 2}`,
      valueInputOption: 'RAW',
      resource: {
        values: [rowData],
      },
    });

    return NextResponse.json({ message: 'Feedback successfully submitted' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message || 'Error submitting feedback to Google Sheets' }, { status: 500 });
  }
}

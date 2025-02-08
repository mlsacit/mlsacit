import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

// Export a named POST method
export async function POST(req) {
  const { qrCodeData } = await req.json();

  const auth = new GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
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
  const range = 'Active!C2:C';

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values || [];
    const existingUsns = values.flat().filter(cell => cell.trim() !== '');

    if (existingUsns.includes(qrCodeData)) {
      return new Response(JSON.stringify({ message: 'QR code already scanned.', alreadyScanned: true }), { status: 400 });
    }

    const nextEmptyRow = values.length + 2;
    const updateRange = `Active!C${nextEmptyRow}`;

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: updateRange,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[qrCodeData]],
      },
    });

    return new Response(JSON.stringify({ message: 'QR code data added successfully.' }), { status: 200 });
  } catch (error) {
    console.error('Error updating the sheet:', error);
    return new Response(JSON.stringify({ message: 'Error updating the sheet.' }), { status: 500 });
  }
}

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import bcrypt from 'bcryptjs';

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
  const usersRange = 'Users!A2:C'; USN, Email, PasswordHash, Salt

  try {
    const { usn, email, password } = await req.json();

    if (!usn || !email || !password) {
      throw new Error('Please provide all required fields.');
    }

    const { data: existingData } = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: usersRange,
    });

    const existingRows = existingData.values || [];
    const duplicateEntry = existingRows.find((row) => row[1]?.toLowerCase() === email.toLowerCase());

    if (duplicateEntry) {
      return new NextResponse('Email already exists', { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userRow = [[email, hashedPassword, salt]]; 

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: usersRange,
      valueInputOption: 'RAW',
      resource: { values: userRow },
    });

    return new NextResponse('User created successfully', { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

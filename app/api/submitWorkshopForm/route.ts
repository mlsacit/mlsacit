import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

// Load environment variables
const WORKSHOP_SHEET_ID = process.env.WORKSHOP_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body
    const formData = await req.json();
   
    // Validate required fields
    if (!formData.name || !formData.usn || !formData.branch || 
        !formData.year || !formData.officialMail || !formData.phoneNumber) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!WORKSHOP_SHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Extract all form fields
    const name = formData.name as string;
    const usn = formData.usn as string;
    const branch = formData.branch as string;
    const year = formData.year as string;
    const officialMail = formData.officialMail as string;
    const phoneNumber = formData.phoneNumber as string;

    // Initialize JWT auth for Google Sheets
    const serviceAccountAuth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize Google Sheets document
    const doc = new GoogleSpreadsheet(WORKSHOP_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    if (!sheet) {
      throw new Error('Sheet not found');
    }

    // Prepare row data
    const rowData = {
      Timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }),
      Name: name,
      USN: usn,
      Branch: branch,
      Year: year,
      'Official Email': officialMail,
      'Phone Number': phoneNumber,
    };

    // Add row to the sheet
    await sheet.addRow(rowData);

    return NextResponse.json(
      { message: 'Workshop registration submitted successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting workshop registration:', error);
    
    return NextResponse.json(
      { 
        message: 'Failed to submit registration. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
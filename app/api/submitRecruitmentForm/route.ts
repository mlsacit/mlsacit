import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GoogleAuth } from 'google-auth-library';
import { NextResponse } from 'next/server';

// Load environment variables
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    
    // Extract all form fields
    const name = formData.name as string;
    const usn = formData.usn as string;
    const branch = formData.branch as string;
    const studentType = formData.studentType as string;
    const officialMail = formData.officialMail as string;
    const phoneNumber = formData.phoneNumber as string;
    const team = formData.team as string;

    // Technical questions
    const technicalContribution = formData.technicalContribution as string;
    const teamExperience = formData.teamExperience as string;
    const deadlineHandling = formData.deadlineHandling as string;
    const topSkills = formData.topSkills as string;
    const projectExperience = formData.projectExperience as string;

    // Curation & Documentation questions
    const writingStyle = formData.writingStyle as string;
    const proudContent = formData.proudContent as string;
    const captionSample = formData.captionSample as string;
    const eventDocumentation = formData.eventDocumentation as string;
    const learningGoals = formData.learningGoals as string;

    // Social Media questions
    const viralCampaign = formData.viralCampaign as string;
    const technicalSimplification = formData.technicalSimplification as string;
    const socialMediaRole = formData.socialMediaRole as string;
    const communityDifference = formData.communityDifference as string;
    const inspiringCampaign = formData.inspiringCampaign as string;

    // Design questions
    const whyDesign = formData.whyDesign as string;
    const designSoftware = formData.designSoftware as string;
    const conflictResolution = formData.conflictResolution as string;
    const designExperience = formData.designExperience as string;
    const instagramProcess = formData.instagramProcess as string;
    const portfolio = formData.portfolio as string;

    // Common questions
    const otherClubs = formData.otherClubs as string;
    const socialLinks = formData.socialLinks as string;

    // Initialize Google Sheets
    const auth = new GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(SHEET_ID, auth);
    await doc.loadInfo();

    // Select the appropriate sheet based on team
    let sheet;
    switch(team) {
      case 'Technical':
        sheet = doc.sheetsByTitle['Technical Team'];
        break;
      case 'Curation & Documentation':
        sheet = doc.sheetsByTitle['Curation & Documentation'];
        break;
      case 'Social Media':
        sheet = doc.sheetsByTitle['Social Media'];
        break;
      case 'Design':
        sheet = doc.sheetsByTitle['Design'];
        break;
      default:
        throw new Error('Invalid team selection');
    }

    if (!sheet) {
      throw new Error(`Sheet for team "${team}" not found`);
    }

    // Common data for all teams
    const commonData = {
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
      Name: name || '',
      USN: usn || '',
      Branch: branch || '',
      StudentType: studentType || '',
      OfficialEmail: officialMail || '',
      PhoneNumber: phoneNumber || '',
      Team: team || '',
      OtherClubs: otherClubs || '',
      SocialLinks: socialLinks || '',
    };

    // Add team-specific data
    let rowData: any = { ...commonData };

    if (team === 'Technical') {
      rowData = {
        ...rowData,
        TechnicalContribution: technicalContribution || '',
        TeamExperience: teamExperience || '',
        DeadlineHandling: deadlineHandling || '',
        TopSkills: topSkills || '',
        ProjectExperience: projectExperience || '',
      };
    } else if (team === 'Curation & Documentation') {
      rowData = {
        ...rowData,
        WritingStyle: writingStyle || '',
        ProudContent: proudContent || '',
        CaptionSample: captionSample || '',
        EventDocumentation: eventDocumentation || '',
        LearningGoals: learningGoals || '',
      };
    } else if (team === 'Social Media') {
      rowData = {
        ...rowData,
        ViralCampaign: viralCampaign || '',
        TechnicalSimplification: technicalSimplification || '',
        SocialMediaRole: socialMediaRole || '',
        CommunityDifference: communityDifference || '',
        InspiringCampaign: inspiringCampaign || '',
      };
    } else if (team === 'Design') {
      rowData = {
        ...rowData,
        WhyDesign: whyDesign || '',
        DesignSoftware: designSoftware || '',
        ConflictResolution: conflictResolution || '',
        DesignExperience: designExperience || '',
        InstagramProcess: instagramProcess || '',
        Portfolio: portfolio || '',
      };
    }

    // Add row to the appropriate sheet
    await sheet.addRow(rowData);

    return NextResponse.json({ 
      message: 'Application submitted successfully!',
      team: team
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ 
      error: 'Failed to submit application. Please try again.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// src/app/api/registration/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/libs/dbConnect";
import Registration from "@/model/Registration";

// Handle POST request
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json(); // Parse the request body
    const {
      teamName,
      teamLeaderName,
      teamLeaderPhoneNumber,
      teamLeaderEmailAddress,
      teamMembers,
      projectDomain,
      socialProjectLink,
      socialProfiles,
    } = body;

    console.log("Req body", body);

    const newRegistration = new Registration({
      teamName,
      teamLeaderName,
      teamLeaderPhoneNumber,
      teamLeaderEmailAddress,
      teamMembers,
      projectDomain,
      socialProjectLink,
      socialProfiles,
    });

    await newRegistration.save();
    return NextResponse.json({ success: true, message: 'Registration successful!' }, { status: 200 });
  } catch (error) {
    console.log("Error",error);
    return NextResponse.json({ success: false, message: 'Registration failed.' }, { status: 400 });
  }
}

// Optionally, handle GET request if needed
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

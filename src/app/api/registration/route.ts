// src/app/api/registration/route.ts

import dbConnect from '@/libs/dbConnect';
import Registration from '@/model/Registration';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log("Team ", body);

    const team = await Registration.create(body);
    team.save();
    return new Response(JSON.stringify({ success: true, team }), { status: 201 });
  } catch (error: any) {
    console.log("Error",error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}

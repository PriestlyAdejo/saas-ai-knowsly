import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse('Unauthorised', { status: 401 });
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    const output = await replicate.run(
      'facebookresearch/musicgen:7a76a8258b23fae65c5a22debb8841d1d7e816b75c2f24218cd2bd8573787906',
      {
        input: {
          model_version: 'melody',
          prompt, // Comeback and add other option
        },
      }
    );

    return NextResponse.json(output);
  } catch (err) {
    console.log('[MUSIC ERROR]:', err);
    return new NextResponse('Internal Error:', { status: 500 });
  }
}

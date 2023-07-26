import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

import { increaseApiLimit, checkApiLimit } from '@/lib/apilimit';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorised', { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI API Key not configure', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse('Free trial has expired.', {
        status: 403,
      });
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });

    await increaseApiLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (err) {
    console.log('[CONVERSATION ERROR]:', err);
    return new NextResponse('Internal Error:', { status: 500 });
  }
}

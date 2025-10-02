// /src/app/api/dicas/route.ts
import { generatePersonalizedSleepTip } from '@/ai/flows/personalized-sleep-tip';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic input validation
    if (!body.stressLevel || !body.caffeineIntake || !body.screenTime || !body.exerciseFrequency || !body.sleepEnvironment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await generatePersonalizedSleepTip(body);
    
    if (result && result.sleepTip) {
      return NextResponse.json(result);
    } else {
      // Fallback or error if Genkit returns empty result
      return NextResponse.json({ error: "Couldn't generate a tip." }, { status: 500 });
    }
  } catch (error: any) {
    console.error('[API DICAS] Error:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 503 });
  }
}

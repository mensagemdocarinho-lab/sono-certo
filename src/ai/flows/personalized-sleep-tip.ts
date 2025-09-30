// Define the personalized sleep tip flow using Genkit.
'use server';

/**
 * @fileOverview Generates a personalized sleep tip based on user inputs.
 *
 * - generatePersonalizedSleepTip - A function that generates the personalized sleep tip.
 * - PersonalizedSleepTipInput - The input type for the generatePersonalizedSleepTip function.
 * - PersonalizedSleepTipOutput - The return type for the generatePersonalizedSleepTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSleepTipInputSchema = z.object({
  stressLevel: z
    .number()
    .min(1)
    .max(5)
    .describe("User's self-assessed stress level on a scale of 1 to 5, with 1 being low and 5 being high."),
  caffeineIntake: z
    .enum(['none', 'low', 'moderate', 'high'])
    .describe('Typical daily caffeine intake.'),
  screenTime: z
    .number()
    .min(0)
    .max(24)
    .describe('Average hours of screen time before bed.'),
  exerciseFrequency: z
    .enum(['none', 'rarely', 'sometimes', 'often'])
    .describe('Frequency of exercise.'),
  sleepEnvironment: z
    .string()
    .describe('Description of the user’s sleep environment (e.g., dark, quiet, noisy).'),
});
export type PersonalizedSleepTipInput = z.infer<typeof PersonalizedSleepTipInputSchema>;

const PersonalizedSleepTipOutputSchema = z.object({
  sleepTip: z.string().describe('A personalized sleep tip based on the user input.'),
});
export type PersonalizedSleepTipOutput = z.infer<typeof PersonalizedSleepTipOutputSchema>;

export async function generatePersonalizedSleepTip(
  input: PersonalizedSleepTipInput
): Promise<PersonalizedSleepTipOutput> {
  return personalizedSleepTipFlow(input);
}

const personalizedSleepTipPrompt = ai.definePrompt({
  name: 'personalizedSleepTipPrompt',
  input: {schema: PersonalizedSleepTipInputSchema},
  output: {schema: PersonalizedSleepTipOutputSchema},
  prompt: `Based on the following information about a user's sleep habits and concerns, generate a single, actionable sleep tip:

Stress Level (1-5): {{{stressLevel}}}
Caffeine Intake: {{{caffeineIntake}}}
Screen Time Before Bed (hours): {{{screenTime}}}
Exercise Frequency: {{{exerciseFrequency}}}
Sleep Environment: {{{sleepEnvironment}}}

Focus on addressing the most significant factors that may be contributing to their sleep issues. The tip should be concise, easy to understand, and practical for immediate implementation. The tone should be encouraging and supportive.
`,
});

const personalizedSleepTipFlow = ai.defineFlow(
  {
    name: 'personalizedSleepTipFlow',
    inputSchema: PersonalizedSleepTipInputSchema,
    outputSchema: PersonalizedSleepTipOutputSchema,
  },
  async input => {
    const {output} = await personalizedSleepTipPrompt(input);
    return output!;
  }
);

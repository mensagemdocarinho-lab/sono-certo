'use server';

/**
 * @fileOverview Generates a personalized 10-minute sleep plan based on user inputs.
 *
 * - generatePersonalizedSleepTip - A function that generates the personalized sleep plan.
 * - PersonalizedSleepTipInput - The input type for the generatePersonalizedSleepTip function.
 * - PersonalizedSleepTipOutput - The return type for the generatePersonalizedSleepTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSleepTipInputSchema = z.object({
  userDescription: z.string().describe('The user’s description of their day and what is bothering them.'),
  contextTags: z.array(z.string()).describe('A list of context tags like [Caffeine], [Screens], [Stress].'),
});
export type PersonalizedSleepTipInput = z.infer<typeof PersonalizedSleepTipInputSchema>;

const PersonalizedSleepTipOutputSchema = z.object({
  title: z.string().describe('A short, engaging title for the 10-minute plan.'),
  why: z.string().describe('A single sentence explaining why this plan works.'),
  steps: z.array(z.string()).describe('An array of 3 short, actionable steps.'),
  totalTime: z.string().describe('The total estimated time in minutes.'),
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
  prompt: `Você é um especialista em higiene do sono. Gere um mini-plano de 10 minutos personalizado para hoje à noite, com base na descrição do usuário e nas tags de contexto quando presentes.
  
Descrição do usuário: {{{userDescription}}}
Tags de Contexto: {{#if contextTags}}[{{#each contextTags}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}]{{else}}Nenhuma{{/if}}

Seu formato de resposta DEVE ser um JSON que segue o Zod schema fornecido. O output deve ser em Português do Brasil, com um tom acolhedor, sem jargões médicos e sem diagnósticos.
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

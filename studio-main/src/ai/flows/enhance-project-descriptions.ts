'use server';
/**
 * @fileOverview This file implements a Genkit flow to enhance project descriptions for a student portfolio.
 * The AI acts as a career coach, refining descriptions to be professional, highlight key achievements,
 * and emphasize relevant technical skills for recruiters.
 *
 * - enhanceProjectDescription - A function that handles the project description enhancement process.
 * - EnhanceProjectDescriptionInput - The input type for the enhanceProjectDescription function.
 * - EnhanceProjectDescriptionOutput - The return type for the enhanceProjectDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EnhanceProjectDescriptionInputSchema = z.object({
  description: z.string().describe('The original project description to be enhanced.'),
  technologiesUsed: z.array(z.string()).describe('A list of technologies used in the project, e.g., ["Python", "SQL"]').optional(),
});
export type EnhanceProjectDescriptionInput = z.infer<typeof EnhanceProjectDescriptionInputSchema>;

const EnhanceProjectDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('The professionally enhanced project description.'),
});
export type EnhanceProjectDescriptionOutput = z.infer<typeof EnhanceProjectDescriptionOutputSchema>;

export async function enhanceProjectDescription(
  input: EnhanceProjectDescriptionInput
): Promise<EnhanceProjectDescriptionOutput> {
  return enhanceProjectDescriptionFlow(input);
}

const enhanceProjectDescriptionPrompt = ai.definePrompt({
  name: 'enhanceProjectDescriptionPrompt',
  input: { schema: EnhanceProjectDescriptionInputSchema },
  output: { schema: EnhanceProjectDescriptionOutputSchema },
  prompt: `You are a professional career coach specializing in helping Computer Science students refine their project descriptions for job applications. Your goal is to transform a raw project description into a polished, impactful, and professional summary that highlights key achievements and relevant technical skills. Focus on making the description appealing to recruiters, emphasizing problem-solving, technical depth, and the impact of the project.

Given the following project details:
Original Description: {{{description}}}
{{#if technologiesUsed}}
Technologies Used: {{{technologiesUsed}}}
{{/if}}

Please provide an enhanced, professional version of the project description, focusing on clarity, impact, and relevance to a software development role. The output should be a concise paragraph suitable for a resume or portfolio.`,
});

const enhanceProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProjectDescriptionFlow',
    inputSchema: EnhanceProjectDescriptionInputSchema,
    outputSchema: EnhanceProjectDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await enhanceProjectDescriptionPrompt(input);
    return output!;
  }
);

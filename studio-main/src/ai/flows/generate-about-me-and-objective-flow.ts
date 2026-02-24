'use server';
/**
 * @fileOverview This file contains a Genkit flow for generating a career objective and an 'About Me' summary
 * for a pre-final-year Computer Science and Engineering student's professional portfolio.
 *
 * - generateAboutMeAndObjective - A function that orchestrates the generation process.
 * - GenerateAboutMeAndObjectiveInput - The input type for the generateAboutMeAndObjective function.
 * - GenerateAboutMeAndObjectiveOutput - The return type for the generateAboutMeAndObjective function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateAboutMeAndObjectiveInputSchema = z.object({
  fullName: z.string().describe("The student's full name."),
  careerFocus: z
    .string()
    .describe(
      'The student\u0027s career focus (e.g., software development / Java / Python & Cybersecurity).'
    ),
  programmingLanguages: z.array(z.string()).describe('A list of programming languages the student knows.'),
  hardwareIot: z.array(z.string()).describe('A list of hardware and IoT skills.'),
  tools: z.array(z.string()).describe('A list of development tools the student uses.'),
  projects: z.array(z.string()).describe('A list of project titles the student has worked on.'),
  certifications: z.array(z.string()).describe('A list of certifications the student has acquired.'),
  internshipExperience: z.string().describe('A summary of the student\u0027s internship experience.'),
});
export type GenerateAboutMeAndObjectiveInput = z.infer<
  typeof GenerateAboutMeAndObjectiveInputSchema
>;

const GenerateAboutMeAndObjectiveOutputSchema = z.object({
  careerObjective: z.string().describe('A concise career objective for the student.'),
  aboutMeSummary: z.string().describe('A short, impactful \u0027About Me\u0027 summary.'),
});
export type GenerateAboutMeAndObjectiveOutput = z.infer<
  typeof GenerateAboutMeAndObjectiveOutputSchema
>;

const generateAboutMeAndObjectivePrompt = ai.definePrompt({
  name: 'generateAboutMeAndObjectivePrompt',
  input: { schema: GenerateAboutMeAndObjectiveInputSchema },
  output: { schema: GenerateAboutMeAndObjectiveOutputSchema },
  prompt: `You are an expert career advisor specializing in creating professional portfolios for pre-final-year Computer Science and Engineering students, particularly for placement preparation at companies like Hexaware.

Your task is to generate a compelling career objective and an impactful 'About Me' summary based on the provided student information. The output must be in JSON format, strictly adhering to the specified output schema.

### Career Objective Requirements:
- Focus on the student's primary career interests: {{{careerFocus}}}.
- Highlight aspirations for software development, Java, Python, and Cybersecurity.
- Emphasize readiness for placement and contributing to a dynamic tech environment.

### About Me Summary Requirements:
- Be short and impactful.
- Highlight strong interest in software development.
- Showcase a problem-solving mindset.
- Express willingness to learn new technologies.
- Emphasize team collaboration skills.

### Student Information:
Full Name: {{{fullName}}}
Career Focus: {{{careerFocus}}}

Skills:
- Programming Languages: {{{programmingLanguages}}}
- Hardware & IoT: {{{hardwareIot}}}
- Tools: {{{tools}}}

Projects:
{{#each projects}}- {{this}}
{{/each}}

Certifications:
{{#each certifications}}- {{this}}
{{/each}}

Internship Experience: {{{internshipExperience}}}

Remember, the goal is to create content suitable for a professional IT placement portfolio, specifically targeting companies like Hexaware. Be concise, professional, and impactful.
`,
});

const generateAboutMeAndObjectiveFlow = ai.defineFlow(
  {
    name: 'generateAboutMeAndObjectiveFlow',
    inputSchema: GenerateAboutMeAndObjectiveInputSchema,
    outputSchema: GenerateAboutMeAndObjectiveOutputSchema,
  },
  async (input) => {
    const { output } = await generateAboutMeAndObjectivePrompt(input);
    if (!output) {
      throw new Error('Failed to generate career objective and about me summary.');
    }
    return output;
  }
);

export async function generateAboutMeAndObjective(
  input: GenerateAboutMeAndObjectiveInput
): Promise<GenerateAboutMeAndObjectiveOutput> {
  return generateAboutMeAndObjectiveFlow(input);
}

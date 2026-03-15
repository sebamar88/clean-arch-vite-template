import { z } from 'zod';

interface LeadCaptureFormValidationContent {
  validation: {
    companyMin: string;
    emailInvalid: string;
    expectedUsersMin: string;
    expectedUsersMax: string;
    challengeMin: string;
  };
}

export function createLeadSchema(content: LeadCaptureFormValidationContent) {
  return z.object({
    company: z.string().min(2, content.validation.companyMin),
    contactEmail: z.email(content.validation.emailInvalid),
    expectedUsers: z
      .number()
      .min(1, content.validation.expectedUsersMin)
      .max(100_000, content.validation.expectedUsersMax),
    challenge: z.string().min(20, content.validation.challengeMin),
  });
}

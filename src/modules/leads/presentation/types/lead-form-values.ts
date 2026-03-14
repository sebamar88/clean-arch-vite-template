import type { leadSchema } from '@modules/leads/presentation/schemas/lead-schema';
import type { z } from 'zod';

export type LeadFormValues = z.input<typeof leadSchema>;

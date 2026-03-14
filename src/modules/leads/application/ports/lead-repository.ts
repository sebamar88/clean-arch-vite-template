import type { CreateLeadInput } from '@modules/leads/application/dto/create-lead-input';
import type { Lead } from '@modules/leads/domain/entities/lead';

export interface LeadRepository {
  create(input: CreateLeadInput): Promise<Lead>;
  list(): Promise<Lead[]>;
}

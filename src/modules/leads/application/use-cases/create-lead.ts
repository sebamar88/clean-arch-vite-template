import type { CreateLeadInput } from '@modules/leads/application/dto/create-lead-input';
import type { LeadRepository } from '@modules/leads/application/ports/lead-repository';

export class CreateLead {
  private readonly repository: LeadRepository;

  constructor(repository: LeadRepository) {
    this.repository = repository;
  }

  execute(input: CreateLeadInput) {
    return this.repository.create(input);
  }
}

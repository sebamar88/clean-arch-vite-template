import type { LeadRepository } from '@modules/leads/application/ports/lead-repository';

export class ListLeads {
  private readonly repository: LeadRepository;

  constructor(repository: LeadRepository) {
    this.repository = repository;
  }

  execute() {
    return this.repository.list();
  }
}

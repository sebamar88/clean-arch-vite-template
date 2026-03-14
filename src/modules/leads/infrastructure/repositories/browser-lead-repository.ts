import type { CreateLeadInput } from '@modules/leads/application/dto/create-lead-input';
import type { LeadRepository } from '@modules/leads/application/ports/lead-repository';
import type { Lead } from '@modules/leads/domain/entities/lead';
import { logger } from '@shared/observability/logger';
import { StorageManager } from 'bytekit/storage-utils';

const STORAGE_KEY = 'clean-arch-template:leads';

export class BrowserLeadRepository implements LeadRepository {
  private readonly storage: StorageManager;

  constructor(storage: StorageManager | Storage = new StorageManager()) {
    this.storage = storage instanceof StorageManager ? storage : new StorageManager(storage);
  }

  async create(input: CreateLeadInput) {
    const leads = await this.list();
    const lead: Lead = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };

    const nextLeads = [lead, ...leads];
    this.storage.set(STORAGE_KEY, nextLeads);
    logger.info('Lead stored locally', { id: lead.id, company: lead.company });

    return lead;
  }

  async list() {
    return (this.storage.get(STORAGE_KEY) as Lead[] | null) ?? [];
  }
}

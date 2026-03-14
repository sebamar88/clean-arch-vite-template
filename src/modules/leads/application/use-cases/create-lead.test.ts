import { CreateLead } from '@modules/leads/application/use-cases/create-lead';
import { ListLeads } from '@modules/leads/application/use-cases/list-leads';
import { BrowserLeadRepository } from '@modules/leads/infrastructure/repositories/browser-lead-repository';
import { describe, expect, it } from 'vitest';

describe('CreateLead', () => {
  it('stores a lead through the repository contract', async () => {
    const storage = window.localStorage;
    storage.clear();

    const repository = new BrowserLeadRepository(storage);
    const createLead = new CreateLead(repository);
    const listLeads = new ListLeads(repository);

    await createLead.execute({
      company: 'Acme Health',
      contactEmail: 'ops@acme.test',
      expectedUsers: 24,
      challenge: 'Necesitamos separar UI, dominio y acceso a datos para escalar el front.',
    });

    const leads = await listLeads.execute();

    expect(leads).toHaveLength(1);
    expect(leads[0]?.company).toBe('Acme Health');
  });
});

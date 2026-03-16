import { CreateLead } from '@modules/leads/application/use-cases/create-lead';
import { ListLeads } from '@modules/leads/application/use-cases/list-leads';
import { BrowserLeadRepository } from '@modules/leads/infrastructure/repositories/browser-lead-repository';
import { describe, expect, it } from 'vitest';

function createMemoryStorage(): Storage {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key) {
      return store.get(key) ?? null;
    },
    key(index) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key) {
      store.delete(key);
    },
    setItem(key, value) {
      store.set(key, value);
    },
  };
}

describe('CreateLead', () => {
  it('stores a lead through the repository contract', async () => {
    const storage = createMemoryStorage();

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

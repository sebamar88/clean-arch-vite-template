import { ListBlueprintItems } from '@modules/blueprint/application/use-cases/list-blueprint-items';
import { InMemoryBlueprintRepository } from '@modules/blueprint/infrastructure/repositories/in-memory-blueprint-repository';
import { describe, expect, it } from 'vitest';

describe('ListBlueprintItems', () => {
  it('returns the blueprint catalog', async () => {
    const useCase = new ListBlueprintItems(new InMemoryBlueprintRepository());

    const items = await useCase.execute();

    expect(items.length).toBeGreaterThan(0);
    expect(items[0]).toHaveProperty('layer');
  });
});

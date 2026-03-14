import { ListBlueprintItems } from '@modules/blueprint/application/use-cases/list-blueprint-items';
import { InMemoryBlueprintRepository } from '@modules/blueprint/infrastructure/repositories/in-memory-blueprint-repository';
import { queryOptions } from '@tanstack/react-query';

const repository = new InMemoryBlueprintRepository();
const listBlueprintItems = new ListBlueprintItems(repository);

export const blueprintQuery = queryOptions({
  queryKey: ['blueprint-items'],
  queryFn: () => listBlueprintItems.execute(),
});

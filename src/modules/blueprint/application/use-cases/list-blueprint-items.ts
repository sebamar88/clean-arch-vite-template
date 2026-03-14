import type { BlueprintRepository } from '@modules/blueprint/application/ports/blueprint-repository';

export class ListBlueprintItems {
  private readonly repository: BlueprintRepository;

  constructor(repository: BlueprintRepository) {
    this.repository = repository;
  }

  execute() {
    return this.repository.list();
  }
}

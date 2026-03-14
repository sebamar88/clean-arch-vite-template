import type { BlueprintItem } from '@modules/blueprint/domain/entities/blueprint-item';

export interface BlueprintRepository {
  list(): Promise<BlueprintItem[]>;
}

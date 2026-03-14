import type { BlueprintRepository } from '@modules/blueprint/application/ports/blueprint-repository';
import type { BlueprintItem } from '@modules/blueprint/domain/entities/blueprint-item';

const blueprintItems: BlueprintItem[] = [
  {
    id: 'shared-kernel',
    title: 'Shared kernel acotado',
    description:
      'Configuracion, logging y clientes externos viven en shared. No se mezclan reglas de negocio con detalles de framework.',
    layer: 'shared',
    tools: ['bytekit', 'vite', 'typescript'],
  },
  {
    id: 'domain-first',
    title: 'Dominio estable',
    description:
      'Entidades, value objects y contratos del modulo se definen antes de llegar a React o a la red.',
    layer: 'domain',
    tools: ['ddd', 'ports'],
  },
  {
    id: 'application-use-cases',
    title: 'Casos de uso explicitos',
    description:
      'Cada interaccion importante pasa por application para evitar componentes con logica de coordinacion.',
    layer: 'application',
    tools: ['use-cases', 'ports', 'queryOptions'],
  },
  {
    id: 'infrastructure-adapters',
    title: 'Adaptadores reemplazables',
    description:
      'Repositorios in-memory, local y remotos se pueden intercambiar sin tocar dominio ni presentacion.',
    layer: 'infrastructure',
    tools: ['repositories', 'bytekit ApiClient', 'storage'],
  },
  {
    id: 'presentation-tanstack',
    title: 'Presentacion con TanStack',
    description:
      'Router, Query y Form resuelven navegacion, cache y formularios sin acoplar el dominio a componentes.',
    layer: 'presentation',
    tools: ['tanstack-router', 'tanstack-query', 'tanstack-form', 'zod'],
  },
];

export class InMemoryBlueprintRepository implements BlueprintRepository {
  async list() {
    return blueprintItems;
  }
}

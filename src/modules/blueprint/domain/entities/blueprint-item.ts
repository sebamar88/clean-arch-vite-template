export type BlueprintLayer =
  | 'shared'
  | 'domain'
  | 'application'
  | 'infrastructure'
  | 'presentation';

export interface BlueprintItem {
  id: string;
  title: string;
  description: string;
  layer: BlueprintLayer;
  tools: string[];
}

import { ListLeads } from '@modules/leads/application/use-cases/list-leads';
import { BrowserLeadRepository } from '@modules/leads/infrastructure/repositories/browser-lead-repository';
import { queryOptions } from '@tanstack/react-query';

export const leadsRepository = new BrowserLeadRepository();
const listLeads = new ListLeads(leadsRepository);

export const leadsQuery = queryOptions({
  queryKey: ['leads'],
  queryFn: () => listLeads.execute(),
});

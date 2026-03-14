import { CreateLead } from '@modules/leads/application/use-cases/create-lead';
import { leadsQuery, leadsRepository } from '@modules/leads/presentation/queries/leads-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const createLead = new CreateLead(leadsRepository);

export function useCreateLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLead.execute.bind(createLead),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: leadsQuery.queryKey });
    },
  });
}

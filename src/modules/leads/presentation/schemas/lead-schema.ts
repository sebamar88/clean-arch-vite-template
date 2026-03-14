import { z } from 'zod';

export const leadSchema = z.object({
  company: z.string().min(2, 'La empresa necesita al menos 2 caracteres.'),
  contactEmail: z.email('Ingresa un email valido.'),
  expectedUsers: z
    .number()
    .min(1, 'Debe haber al menos 1 usuario esperado.')
    .max(100_000, 'Usa un valor realista para el ejemplo.'),
  challenge: z.string().min(20, 'Describe el problema con al menos 20 caracteres.'),
});

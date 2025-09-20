import { z } from 'zod';

export const formCalculatorSchema = z.object({
  genre: z.string(),
  age: z.coerce.number().min(1, 'La edad debe ser mayor que 0'),
  weight: z.coerce.number().min(1, 'El peso debe ser mayor que 0'),
  height: z.coerce.number().min(1, 'La altura debe ser mayor que 0'),
  activity: z.coerce.number().min(1, 'Debes seleccionar una actividad'),
  goal: z.string().min(1, 'Debes seleccionar un objetivo'),
});

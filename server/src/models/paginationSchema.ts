import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.number().int().nonnegative().default(1),
  limit: z.number().int().positive().default(10),
});

export type PaginationParams = z.infer<typeof paginationSchema>;

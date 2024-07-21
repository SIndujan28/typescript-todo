import { z } from 'zod';

export const todoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  completed: z.boolean(),
});

export const createTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  completed: z.boolean(),
}); 
export const updateTodoSchema = todoSchema.partial();

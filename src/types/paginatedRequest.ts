import { Request } from 'express';
import { PaginationParams } from '../models/paginationSchema';

export type PaginatedRequest = Request & {
  pagination?: PaginationParams;
};

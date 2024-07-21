import { Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { PaginatedRequest } from '../types/paginatedRequest'
import { paginationSchema } from '../models/paginationSchema';


export const paginationMiddleware = (req: PaginatedRequest, res: Response, next: NextFunction) => {
  try {
    const parsedPagination = paginationSchema.parse({
      page: req.query.page ? parseInt(req.query.page as string, 10) : undefined,
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : undefined,
    });

    req.pagination = parsedPagination;

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        errors: error.errors,
      });
    } else {
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    }
  }
};

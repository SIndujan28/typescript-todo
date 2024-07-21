// src/middleware/validate.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError, ZodTypeAny } from 'zod';

interface ValidationSchemas<TBody = ZodTypeAny, TQuery = ZodTypeAny, TParams = ZodTypeAny> {
  body?: ZodSchema<TBody>;
  query?: ZodSchema<TQuery>;
  params?: ZodSchema<TParams>;
}

export const validate = <TBody, TQuery, TParams>(schemas: ValidationSchemas<TBody, TQuery, TParams>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) {
        schemas.body.parse(req.body);
      }
      if (schemas.query) {
        schemas.query.parse(req.query);
      }
      if (schemas.params) {
        schemas.params.parse(req.params);
      }
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
};
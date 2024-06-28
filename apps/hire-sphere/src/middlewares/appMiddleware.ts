/**
 * @fileoverview Middleware configuration for the Express application.
 * @version 1.0.0
 * @module middlewares
 */

import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as swaggerUi from 'swagger-ui-express';

/**
 * Configure middlewares for the Express application.
 * @param {Application} app - The Express application instance.
 */
export const configureMiddlewares = (app: Application): void => {
  app.set('trust proxy', 1);
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(compression());
  app.use(express.static('docs'));

  // Development specific setup
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // CORS configuration
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    }),
  );

  // Security headers
  app.use(helmet());

  // API Documentation
  app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
      },
    }),
  );
};

/**
 * @fileoverview Express application setup and configuration with request logging.
 * @version 1.0.0
 * @module appConfig
 */

import dotenv from 'dotenv';
import express, { Application } from 'express';
import { configureMiddlewares } from '../middlewares';

dotenv.config();

/**
 * The Express application instance.
 * @type {Application}
 */
const app: Application = express();

configureMiddlewares(app);

export default app;

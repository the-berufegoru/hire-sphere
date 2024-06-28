/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview Server setup and configuration.
 * @version 1.0.0
 * @module server
 */

import dotenv from 'dotenv';
import http from 'http';
import ip from 'ip';
import os from 'os';
import app from './configs/appConfig';
import { logger } from './utils';

dotenv.config();

const PORT: string | number = process.env.PORT ?? 3000;

/**
 * The HTTPS server instance.
 * @type {http.Server}
 */
const server: http.Server = http.createServer(app);

// Error handling for address in use
server.on('error', (e: any) => {
  if (e.code === 'EADDRINUSE') {
    logger.error('Address in use, retrying...', { ...e });
    setTimeout(() => {
      server.close();
      server.listen(PORT, () => {
        logger.info({
          service_name: 'hire-sphere',
          host: `http://${ip.address()}:${PORT}`,
          platform: os.platform(),
        });
      });
    }, 1000);
  }
});

// Start the HTTP server
server.listen(PORT, () => {
  logger.info({
    service_name: 'hire-sphere',
    host: `http://${ip.address()}:${PORT}`,
    platform: os.platform(),
  });
});

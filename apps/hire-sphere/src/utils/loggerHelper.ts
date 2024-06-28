/**
 * Logger utility leveraging Winston for configurable logging across environments.
 * This implementation follows the Singleton pattern to ensure a consistent logging mechanism.
 * @version 2.0.0
 * @module loggerHelper
 */

import { utils } from '@hire-sphere/libs';

export const logger = utils.getLoggerFor('LOGTAIL_SYSTEM_ACCESS_TOKEN');

/**
 * Logger utility leveraging Winston for configurable logging across environments.
 * This implementation follows the Singleton pattern to ensure a consistent logging mechanism.
 * @version 2.0.0
 * @module loggerHelper
 */
import winston, { Logger, createLogger } from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

// Environment and logger configuration types for improved type safety and IntelliSense.
type Environment = 'development' | 'production';

type LoggerAccessToken = string;

/**
 * Singleton class responsible for initializing and providing access to logger instances.
 */
class LoggerHelper {
  private static instance: LoggerHelper;

  /**
   * Ensures a single instance of LoggerHelper is used throughout the application.
   * @returns {LoggerHelper} Instance of LoggerHelper.
   */
  public static getInstance(): LoggerHelper {
    if (!LoggerHelper.instance) {
      LoggerHelper.instance = new LoggerHelper();
    }
    return LoggerHelper.instance;
  }

  /**
   * Creates a Winston logger tailored to the application's current environment.
   * @param {LoggerAccessToken} accessToken - Unique access token for the logger.
   * @returns {Logger} Configured Winston logger instance.
   */
  public createLogger(accessToken: LoggerAccessToken): Logger {
    const environment: Environment =
      (process.env.NODE_ENV as Environment) || 'development';
    const transports =
      environment === 'development'
        ? new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
              winston.format.json(),
              winston.format.prettyPrint(),
            ),
          })
        : new LogtailTransport(new Logtail(accessToken));

    return createLogger({ transports });
  }
}

/**
 * Creates a Winston logger based on the specified access token name.
 * Utilizes an arrow function for a concise and modern syntax.
 * Throws an error if the access token is not found in the environment variables.
 *
 * @param tokenName The name of the environment variable containing the logger's access token.
 * @returns {Logger} A Winston logger instance configured based on the specified access token.
 */
export const getLoggerFor: (tokenName: string) => Logger = (
  tokenName: string,
): Logger => {
  const accessToken: LoggerAccessToken | undefined = process.env[tokenName];
  if (!accessToken) {
    throw new Error(
      `Access token for ${tokenName} is not defined in the environment variables.`,
    );
  }
  return LoggerHelper.getInstance().createLogger(accessToken);
};

/**
 * @fileoverview
 * @version 1.0.0
 * @module userInterface
 */
import { Document } from 'mongoose';

export interface IUser extends Document {
  email?: string;
  mobileNumber?: string;
  password?: string;
  role?: string;
  isVerified?: boolean;
}

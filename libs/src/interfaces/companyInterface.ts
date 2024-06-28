/**
 * @fileoverview
 * @version 1.0.0
 * @module companyInterface
 */
import { Document, Schema } from 'mongoose';

export interface ICompany extends Document {
  avatarUrl: object;
  name?: string;
  industry?: string;
  websiteUrl?: string;
  location?: string;
  description?: string;
  size?: number;
  foundedIn?: number;
  isVerified?: boolean;
  userId?: Schema.Types.ObjectId;
}

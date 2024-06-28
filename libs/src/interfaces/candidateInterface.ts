/**
 * @fileoverview
 * @version 1.0.0
 * @module candidateInterface
 */
import { Document, Schema } from 'mongoose';

export interface ICandidate extends Document {
  avatarUrl?: object;
  firstName?: string;
  lastName?: string;
  title?: string;
  skills?: string[];
  isEmployed?: boolean;
  userId?: Schema.Types.ObjectId;
}

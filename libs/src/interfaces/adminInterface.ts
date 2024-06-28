/**
 * @fileoverview
 * @version 1.0.0
 * @module adminInterface
 */
import { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
  avatarUrl?: object;
  firstName?: string;
  lastName?: string;
  userId?: Schema.Types.ObjectId;
}

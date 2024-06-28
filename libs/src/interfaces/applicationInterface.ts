/**
 * @fileoverview
 * @version 1.0.0
 * @module applicationInterface
 */
import { Document, Schema } from 'mongoose';

export interface IApplication extends Document {
  jobId?: Schema.Types.ObjectId;
  candidateId?: Schema.Types.ObjectId;
  status?: string;
}

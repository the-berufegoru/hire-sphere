/**
 * @fileoverview
 * @version 1.0.0
 * @module jobInterface
 */
import { Document, Schema } from 'mongoose';

export interface IJob extends Document {
  title?: string;
  description?: string;
  responsibility?: string;
  requirements?: Array<string>;
  benefits?: Array<string>;
  location?: string;
  type?: string;
  vacancy?: number;
  deadline?: Date;
  tags?: Array<string>;
  companyId?: Schema.Types.ObjectId;
  views?: number;
  isActive?: boolean;
}

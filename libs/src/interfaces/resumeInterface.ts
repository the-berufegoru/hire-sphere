/**
 * @fileoverview
 * @version 1.0.0
 * @module resumeInterface
 */
import { Document, Schema } from 'mongoose';

/**
 * Contains basic contact information for a resume.
 */
interface IResumeBasic {
  avatar?: object;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  profileSummary?: string;
}

/**
 * Represents an individual educational institution.
 */
interface IResumeEducation {
  name?: string;
  degree?: string;
  fieldOfStudy?: string;
  startYear?: number;
  endYear?: number;
}

/**
 * Covers professional experience relevant to the resume.
 */
interface IResumeProfession {
  company?: string;
  role?: string;
  startDate?: Date;
  endDate: Date;
  description?: string;
}

/**
 * References available to vouch for the individual.
 */
interface IResumeReference {
  name?: string;
  phoneNumber?: string;
  email?: string;
  relation?: string;
}

interface IResume extends Document, IResumeBasic {
  educations?: IResumeEducation;
  professions?: IResumeProfession;
  references?: IResumeReference;
  candidateId?: Schema.Types.ObjectId;
}

export {
  IResumeBasic,
  IResumeEducation,
  IResumeProfession,
  IResumeReference,
  IResume,
};

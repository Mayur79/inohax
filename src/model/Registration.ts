import mongoose, { Schema, Document } from 'mongoose';

interface IRegistration extends Document {
  teamName: string;
  teamLeaderName: string;
  teamLeaderPhoneNumber: string;
  teamLeaderEmailAddress: string;
  teamMembers: string[]; // Ensure this is an array of strings
  projectDomain: string;
  socialProjectLink: string;
  socialProfiles: string[]; // Ensure this is an array of strings
}

const RegistrationSchema: Schema = new Schema(
  {
    teamName: { type: String, required: true },
    teamLeaderName: { type: String, required: true },
    teamLeaderPhoneNumber: { type: String, required: true },
    teamLeaderEmailAddress: { type: String, required: true },
    teamMembers: { type: [String], required: true }, // Array of strings
    projectDomain: { type: String },
    socialProjectLink: { type: String },
    socialProfiles: { type: [String], required: true }, // Array of strings
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model<IRegistration>('Registration', RegistrationSchema);

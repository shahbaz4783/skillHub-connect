import type { JobPost, Proposal, ServicePost } from '@prisma/client';

export interface FormState {
  message: {
    error?: string;
    success?: string;
  };
  otpReceive?: boolean;
}

interface User {
  name: string | null;
  image: string | null;
}

interface JobPostObj {
  title: string;
  id: string;
  price: number;
}

export interface JobPostData extends JobPost {
  user: User;
  _count: {
    proposals: number;
  };
}

export interface ProposalData extends Proposal {
  user: User;
  jobPost: JobPostObj;
}

export interface ServicePostData extends ServicePost {
  user: User;
}

export interface UserProfile {
  userTitle: string;
  skills: string;
  bio: string;
}

export interface UserAddress {
  address: string;
  address2: string;
  city: string;
  country: string;
  postal_code: number;
}
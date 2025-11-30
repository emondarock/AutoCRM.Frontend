// Common TypeScript types and interfaces

export interface User {
  id: string;
  email: string;
  clerkId: string;
  subscriptionStatus: 'free' | 'pro' | 'trial';
  createdAt: string;
  updatedAt: string;
}

export interface Connection {
  id: string;
  userId: string;
  platform: 'facebook' | 'hubspot';
  status: 'active' | 'inactive' | 'error';
  accountName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Automation {
  id: string;
  userId: string;
  name: string;
  sourcePlatform: 'facebook';
  destinationPlatform: 'hubspot';
  isActive: boolean;
  fieldMapping: Record<string, string>;
  stats: {
    totalSynced: number;
    successCount: number;
    errorCount: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SyncLog {
  id: string;
  automationId: string;
  status: 'success' | 'error' | 'pending';
  leadData: Record<string, any>;
  errorMessage?: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  error: {
    message: string;
    status: number;
  };
}

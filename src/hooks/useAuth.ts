'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { authApi } from '@/lib/api';

export interface User {
  id: string;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  subscriptionStatus: 'free' | 'trial' | 'pro';
  subscriptionEndsAt?: string;
  trialEndsAt?: string;
  isSubscriptionActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export function useAuth() {
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!isLoaded) return;

      if (!isSignedIn) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await authApi.getCurrentUser();
        setUser(response.data.user);
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch user:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [isLoaded, isSignedIn]);

  return {
    user,
    clerkUser,
    isLoaded,
    isSignedIn,
    loading,
    error,
  };
}

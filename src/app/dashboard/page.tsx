'use client';

import { useUser } from '@clerk/nextjs';

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName || 'there'}!
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your Facebook Lead Ads to HubSpot automations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Subscription</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">TRIAL</p>
          <p className="text-sm text-gray-600 mt-2">14 days remaining</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Active Automations</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">0</p>
          <p className="text-sm text-gray-600 mt-2">No automations yet</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Leads Synced</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">0</p>
          <p className="text-sm text-gray-600 mt-2">Last 30 days</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          🚀 Get Started
        </h3>
        <p className="text-blue-700 mb-4">
          Connect your Facebook and HubSpot accounts to start automating your leads!
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Connect Facebook
        </button>
      </div>
    </div>
  );
}

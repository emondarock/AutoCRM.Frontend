'use client';

export default function AutomationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Automations</h1>
      <p className="text-gray-600 mb-8">
        Create and manage your Facebook Lead Ads to HubSpot automations
      </p>
      
      <div className="bg-white border rounded-lg p-8 text-center">
        <p className="text-gray-500">No automations yet. Create your first one!</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Create Automation
        </button>
      </div>
    </div>
  );
}

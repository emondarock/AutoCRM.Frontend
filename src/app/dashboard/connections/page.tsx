'use client';

export default function ConnectionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Connections</h1>
      <p className="text-gray-600 mb-8">
        Connect your Facebook and HubSpot accounts
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Facebook</h3>
          <p className="text-sm text-gray-600 mb-4">
            Connect your Facebook account to access Lead Ads
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Connect Facebook
          </button>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">HubSpot</h3>
          <p className="text-sm text-gray-600 mb-4">
            Connect your HubSpot CRM to sync contacts
          </p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Connect HubSpot
          </button>
        </div>
      </div>
    </div>
  );
}

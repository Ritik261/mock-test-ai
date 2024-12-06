import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { User, Settings, LogOut } from 'lucide-react';

export const Profile = () => {
  const { user, signOut } = useAuthContext();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full">
                <User className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{user?.email}</h1>
                <p className="text-orange-100">Member since {new Date(user?.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Account Settings</span>
                </div>
                <button className="text-orange-600 hover:text-orange-700">
                  Edit
                </button>
              </div>

              <button
                onClick={handleSignOut}
                className="flex items-center justify-center w-full space-x-2 bg-red-50 text-red-600 p-4 rounded-lg hover:bg-red-100 transition"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
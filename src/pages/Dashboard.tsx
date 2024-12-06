import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { CreateInterviewModal } from '../components/interview/CreateInterviewModal';
import { InterviewSetup } from '../types/interview';

export const Dashboard = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateInterview = async (setup: InterviewSetup) => {
    try {
      // TODO: Generate questions using Gemini API
      console.log('Creating interview with setup:', setup);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating interview:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.email}</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            <Plus className="w-5 h-5" />
            Create Interview
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Practice Sessions</h2>
            <p className="text-gray-600">No practice sessions yet. Start one now!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <p className="text-gray-600">Track your interview performance here.</p>
          </div>
        </div>

        <CreateInterviewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateInterview}
        />
      </div>
    </div>
  );
};
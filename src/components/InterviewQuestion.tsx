import React from 'react';
import { useInterviewStore } from '../store/interviewStore';

export const InterviewQuestion = () => {
  const { currentQuestion, isLoading } = useInterviewStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Interview Question:</h2>
      {isLoading ? (
        <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4"></div>
      ) : (
        <p className="text-gray-700">{currentQuestion}</p>
      )}
    </div>
  );
};
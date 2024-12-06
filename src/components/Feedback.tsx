import React from 'react';
import { useInterviewStore } from '../store/interviewStore';

export const Feedback = () => {
  const { feedback, isLoading } = useInterviewStore();

  if (!feedback && !isLoading) return null;

  return (
    <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
      <h3 className="text-lg font-semibold text-green-800 mb-2">Feedback:</h3>
      {isLoading ? (
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-green-100 rounded w-3/4"></div>
          <div className="h-4 bg-green-100 rounded w-1/2"></div>
        </div>
      ) : (
        <p className="text-green-700">{feedback}</p>
      )}
    </div>
  );
};
import React from 'react';
import { ArrowRight, Brain, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-orange-100/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Your Interview Skills with{' '}
            <span className="text-orange-600">AI-Powered Practice</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Practice interviews anytime, anywhere. Get instant feedback and improve your confidence
            with our advanced AI interview simulator.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Start Practicing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg border border-orange-200 hover:bg-orange-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Practice</h3>
            <p className="text-gray-600">
              Get questions tailored to your industry and experience level.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Feedback</h3>
            <p className="text-gray-600">
              Receive instant, detailed feedback on your responses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor your improvement over time with detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { BookOpen, Clock, MessageSquare, Star, Zap } from 'lucide-react';

export const Features = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose ConfidenceAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform offers everything you need to ace your next interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-6 h-6" />,
              title: '24/7 Availability',
              description: 'Practice whenever it suits you, no scheduling required.',
            },
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: 'Real-time Feedback',
              description: 'Get instant insights on your interview performance.',
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: 'Extensive Question Bank',
              description: 'Access thousands of real interview questions.',
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: 'Industry Specific',
              description: 'Questions tailored to your target role and industry.',
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Performance Analytics',
              description: 'Track your progress with detailed metrics.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-orange-50/50 p-6 rounded-xl hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
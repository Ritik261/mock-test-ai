import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, History, LayoutDashboard, User } from 'lucide-react';
import { useAuthContext } from '../../contexts/AuthContext';

export const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-orange-600" />
            <span className="font-bold text-xl text-gray-900">ConfidenceAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition">Home</Link>
            {user && (
              <>
                <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/history" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition">
                  <History className="w-4 h-4" />
                  <span>History</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <Link to="/profile" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-orange-600" />
                </div>
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-orange-600 transition">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
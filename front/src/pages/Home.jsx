import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Home = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        {isAuthenticated ? (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome back, <span className="text-blue-600">{user?.name || 'User'}</span>!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              You're now logged in to your account.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/dashboard" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Go to Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                View Profile
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users managing their work efficiently.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/register" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up Free
              </Link>
              <Link 
                to="/login" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {isAuthenticated ? 'Your Dashboard Features' : 'Key Features'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {isAuthenticated ? 'Task Management' : 'Easy to Use'}
            </h3>
            <p className="text-gray-600">
              {isAuthenticated 
                ? 'Organize and track all your tasks in one place'
                : 'Intuitive interface that anyone can master quickly'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {isAuthenticated ? 'Data Analytics' : 'Powerful Tools'}
            </h3>
            <p className="text-gray-600">
              {isAuthenticated 
                ? 'View detailed reports and performance metrics'
                : 'All the features you need to be productive'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {isAuthenticated ? 'Team Collaboration' : 'Cloud Sync'}
            </h3>
            <p className="text-gray-600">
              {isAuthenticated 
                ? 'Work seamlessly with your team members'
                : 'Access your data from anywhere, anytime'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
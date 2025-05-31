import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; 
// Adjust import path as needed
const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My Website</h1>
        <div className="links flex space-x-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          {!isAuthenticated ? (
            <>
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Register
              </Link>
            </>
          ) : (
            <button 
              onClick={handleLogout}
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
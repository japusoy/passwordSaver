import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className="relative bg-white mb-5 rounded-sm">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={memories} alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"> <span className="sr-only">Open menu</span> {/* Heroicon name: outline/menu */} <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> </svg> </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900"> SIMPLE CRUD TEMPLATE USING MERN + REDUX + GOOGLE LOGIN + TAILWINDCSS (PROJECT MEMORIES)</a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {user?.result ? (
              <div className="md:flex items-center gap-3">
                <img className="w-8 rounded-full shadow-sm" alt={user?.result.name} src={user?.result.imageUrl} />
                {/* {user?.result.name.charAt(0)} */}
                <h6>{user?.result.name}</h6>
                <Link to="/auth" className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={logout}> Log out </Link>
              </div>
            ) : (
              <Link to="/auth" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </Link>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;

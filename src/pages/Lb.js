import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Lb = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div className="h-screen flex justify-center space-x-4">
          <h1 className="grid content-center">Welcome</h1>
          <button onClick={() => logout()}>Log out</button>
          {/* Render the dashboard content */}
        </div>
      ) : (
        <div className="h-screen grid content-center space-y-4">
          <h1 className="flex justify-center text-xl md:text-3xl lg:text-5xl font-semibold">Sign-in to access the Dashboard</h1>
          <div className='flex justify-center'>
            <button onClick={() => loginWithRedirect()} className="bg-slate-200 hover:bg-slate-300 text-gray-700 transition duration-200 ease-in p-2 rounded-lg font-semibold md:text-lg lg:text-xl">Sign-in</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lb;

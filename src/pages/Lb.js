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
        <div className="h-screen flex justify-center space-x-4">
          <h1 className="grid content-center">Welcome to the login page</h1>
          <button onClick={() => loginWithRedirect()}>Log in</button>
        </div>
      )}
    </div>
  );
};

export default Lb;

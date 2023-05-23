import React from 'react';
import Login from './Login';

export default function LoginPage () {
  return (
    <div>
    {isAuthenticated ? (
        <>
            <div className="h-screen flex justify-center">
                <div className="grid content-center">
                    Test
                </div>
            </div>
        </>
    ) : (
        <Login />
    )}
    </div>
)}
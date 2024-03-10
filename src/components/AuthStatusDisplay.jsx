import React from 'react';
import { useAuth } from './firebase'; // Import the useAuth hook

const AuthStatusDisplay = () => {
  const { user } = useAuth();

  // Use the user object or authentication status as needed

  return (
    <div>
      {user ? <p>User is logged in: {user.email}</p> : <p>User is not logged in</p>}
    </div>
  );
};

export default AuthStatusDisplay;
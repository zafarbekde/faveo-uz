// components/ProtectedComponent.js
import React from 'react';

const ProtectedComponent = () => {
  return (
    <div>
      <h1>Protected Component</h1>
      <p>You must be logged in to see this.</p>
    </div>
  );
};

export default ProtectedComponent;
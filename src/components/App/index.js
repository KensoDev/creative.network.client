import React from 'react';

import Navigation from '../Navigation';

export default function App({ children }) {
  return (
    <div className="container">
      <div className="row">
        <Navigation />
        { children }
      </div>
    </div>
  );
}

import React from 'react';

export default function App({ children }) {
  return (
    <div className="app">
      <div>
        <h1>This is a react app</h1>
      </div>
      <div>
        { children }
      </div>
    </div>
  );
}

import React from 'react';

require('./style.scss');

export default function Navigation() {
  return (
    <div className="row navbar content" role="navigation">
      <div className="col-md-3">
        <div className="logo">
          <span>
            Creative Network
          </span>
        </div>
      </div>
    </div>
  );
}

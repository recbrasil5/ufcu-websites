import React from 'react';
import SiteList from './SiteList';
import SiteInfo from './SiteInfo';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <SiteInfo />
          </div>
          <div className="five wide column">
            <SiteList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

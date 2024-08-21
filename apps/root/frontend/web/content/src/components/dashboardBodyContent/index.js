import React from 'react';
import DashbaordLeft from '../dashboardLeff';
import DashbaordRight from '../dashboardRight';
import './index.scss';

const DashbaordBodyContent = () => {
  return (
    <div className="dashboardWrapper">
      <div className="container">
        <div className="dashboardContainer">
          <DashbaordLeft />
          <DashbaordRight />
        </div>
      </div>
    </div>
  );
};

export default DashbaordBodyContent;

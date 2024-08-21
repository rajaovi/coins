import React from 'react';
import Header from '../../components/header';
import './index.scss';
import DashbaordBodyContent from '../../components/dashboardBodyContent';

const Dashbaord = () => {
  return (
    <main>
      <div className="headerWrapper">
        <Header />
        <DashbaordBodyContent />
      </div>
    </main>
  );
};

export default Dashbaord;

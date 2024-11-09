import React from 'react';
import Sidebar from './Sidebar';
import AssetTable from './Table';
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <AssetTable />
    </div>
  );
};

export default DashboardLayout;

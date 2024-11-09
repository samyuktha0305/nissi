import React from 'react';
import styles from './DashboardLayout.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>Zeab</h2>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Dashboard</li>
        <li className={`${styles.menuItem} ${styles.active}`}>Scan History</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  // Dummy data for demonstration
  const metrics = [
    { name: 'Total Products', value: 50 },
    { name: 'Total Orders', value: 100 },
    { name: 'Total Revenue', value: '$5000' },
  ];

  // Render individual metric items
  const renderMetrics = () => {
    return metrics.map((metric, index) => (
      <div key={index} className={styles.metricItem}>
        <div className={styles.metricName}>{metric.name}</div>
        <div className={styles.metricValue}>{metric.value}</div>
      </div>
    ));
  };

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard</h2>
      <div className={styles.metricsContainer}>
        {renderMetrics()}
      </div>
    </div>
  );
}

export default Dashboard;
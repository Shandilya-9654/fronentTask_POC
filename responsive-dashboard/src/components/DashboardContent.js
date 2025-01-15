import React from 'react';
import LineChart from './LineChart';
import TransactionsTable from './TransactionsTable';
import ErrorBoundary from './ErrorBoundary';
const DashboardContent = () => (
  <div className="dashboard-content">
    <h1>Dashboard</h1>
    <ErrorBoundary/>
    <LineChart />
    <ErrorBoundary/>
    <TransactionsTable />
  </div>
);

export default DashboardContent;

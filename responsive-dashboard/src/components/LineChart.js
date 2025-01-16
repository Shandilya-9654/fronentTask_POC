// import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './LineChart.scss';
import { ThemeContext } from './ThemeProvider';
import React, { useContext } from 'react';


// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [1200, 1900, 1700, 2200, 2000, 2400],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const LineChart = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const getClassName = () => {
    if (theme === "dark") {
      return "line-chart-dark";
    } else {
      return "line-chart";
    }
  };
  return (
    <div className={getClassName()}>
      
      <h2>Monthly Sales Data</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

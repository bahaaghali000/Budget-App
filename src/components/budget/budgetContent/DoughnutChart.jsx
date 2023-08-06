import React from 'react';
import './DoughnutChart.css';

import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);

const options = {
  plugins: {
    legend: {
      labels: {
        color: '#fff',
      },
    },
  },
};

const DoughnutChart = ({ dataTab, colors }) => {
  const data = {
    labels: dataTab.map((c) => c.category),
    datasets: [
      {
        data: dataTab.map((c) => c.price),
        backgroundColor: colors,
        borderWidth: 1,
        borderColor: ['#f7f8f8'],
        radius: '80%',
      },
    ],
  };

  return (
    <div className="doughnut-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

import React from 'react';
import moment from 'moment';
import LineGraph from './LineGraph'; // Adjust the import path as needed

const YourApp = () => {
  const graphData = {
    dataPoints: [
      { date: '2023-01-01', value: 10 },
      { date: '2023-01-02', value: 15 },
      { date: '2023-01-03', value: 25 },
      { date: '2023-01-04', value: 20 },
      { date: '2023-01-05', value: 30 },
    ],
  };

  const formattedData = {
    days: graphData.dataPoints.map((point) => moment(point.date).format('DD/MM')),
    values: graphData.dataPoints.map((point) => point.value),
  };

  return (
    <div>
      <LineGraph
        data={formattedData}
        width={600}
        height={200}
        theme="light" // You can pass the theme as needed
      />
    </div>
  );
};

export default YourApp;

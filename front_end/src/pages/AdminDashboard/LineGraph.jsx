import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = ({ data, width, height, theme }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const lineColor = theme === 'black' ? '#ecf0f1' : '#3498db';
    const backgroundColor = theme === 'black' ? 'rgba(236, 240, 241, 0.2)' : 'rgba(52, 152, 219, 0.2)';
    const pointColor = theme === 'black' ? '#ecf0f1' : '#3498db';
    const gridColor = theme === 'black' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const tickColor = theme === 'black' ? '#ecf0f1' : '#333';

    chartRef.current.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.days,
        datasets: [
          {
            label: 'Total Transaction Value',
            data: data.values,
            borderColor: lineColor,
            backgroundColor: backgroundColor,
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: pointColor,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: data.days,
            grid: {
              color: gridColor,
            },
            ticks: {
              color: tickColor,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: gridColor,
            },
            ticks: {
              color: tickColor,
            },
          },
        },
      },
    });
  }, [data, width, height, theme]);

  return (
    <canvas
      ref={chartRef}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%', margin: '20px auto' }}
    />
  );
};

export default LineGraph;

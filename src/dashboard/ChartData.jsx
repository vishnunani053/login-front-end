import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartData = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Create the chart instance when the component mounts
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["A", "B", "C"],
        datasets: [{
          label: 'Example Dataset',
          data: [10, 20, 30], // Example data for the bar chart
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Destroy the chart when the component unmounts
    return () => {
      chartInstance.current.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartData;

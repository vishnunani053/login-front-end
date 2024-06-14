import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const api_url = "https://login-backend-mtg3.onrender.com";


const ChartData = () => {
    const [events, setEvents] = useState([]);
    const [chartKey, setChartKey] = useState(Date.now()); // Unique key for each chart

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${api_url}/showchart`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data ,"chart data")
            setEvents(data);
        } catch (err) {
            console.error(err);
        }
    };

    // Process data for visualization
    const intensityData = {
        labels: events.map(event => event.title),
        datasets: [
            {
                label: 'Intensity',
                data: events.map(event => event.intensity),
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }
        ]
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Bar
                data={intensityData}
                key={chartKey} // Use unique key for each chart
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    );
};

export default ChartData;

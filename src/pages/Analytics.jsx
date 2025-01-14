import { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        // Fetch analytics data from the server
        axios.get('/api/analytics')
            .then(response => {
                setAnalyticsData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the analytics data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Resume Analytics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Viewer</th>
                        <th>Time Opened</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {analyticsData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.viewer}</td>
                            <td>{new Date(data.timeOpened).toLocaleString()}</td>
                            <td>{data.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Analytics;
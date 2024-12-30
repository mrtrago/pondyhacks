// RetrieveData.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RetrieveData = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/retrieve-all-data'); // Adjust URL if needed
        setSensorData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching sensor data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>All Sensor Data</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Sensor ID</th>
            <th>Sensor Name</th>
            <th>Location</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((data, index) => (
            <tr key={index}>
              <td>{new Date(data[0] * 1000).toLocaleString()}</td> {/* Convert Unix timestamp to date */}
              <td>{data[1]}</td>
              <td>{data[2]}</td>
              <td>{data[3]}</td>
              <td>{data[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RetrieveData;

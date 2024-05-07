'use client'

import React, { useState, useEffect } from 'react';

interface DataItem {
  Title: string;
  Date: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/excel', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData: DataItem[] = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Hello!</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-2">
            <strong className="mr-2">Title:</strong> {item.Title}, <strong className="mr-2">Date:</strong> {item.Date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

export const Datafetching = () => {
    const [data, setdata] = useState([]);

    const fetchdata = async () => {
        try {
            const resource = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setdata(resource.data);  // Update state with the fetched data
        } catch (error) { 
            console.error("Error fetching data:", error);
        }
    };

    // Using useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <h2>Data Fetching</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

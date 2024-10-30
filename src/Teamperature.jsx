import React, { useState } from 'react';
import axios from 'axios';      
import hot from './img/clear.jpg';
import warm from './img/cloud.jpg';
import cool from './img/rain.jpg';
import cold from './img/snow.jpg';

export const Teamperature = () => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');

    const fetchData = async () => {
        try {
            const resource = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
            setData(resource.data);
            setErrorMessage('');
            updateBackgroundImage(resource.data.main.temp);  // Pass the temperature to change the background
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while fetching the data. Please try again.");
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const updateBackgroundImage = (temperature) => {
        if (temperature > 176) {
            setBackgroundImage(hot);   // Set hot image for high temperature
        } else if (temperature > 140) {
            setBackgroundImage(warm);  // Set warm image for moderate temperature
        } else if (temperature > 104) {
            setBackgroundImage(cool);  // Set cool image for cooler temperature
        } else {
            setBackgroundImage(cold);  // Set cold image for low temperature
        }
    };

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto">
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Enter the city"
                        className="w-3/4 sm:w-1/2 p-2 rounded-l-md text-black"
                        onChange={handleChange}
                        value={search}
                    />
                    <button
                        onClick={fetchData}
                        className="bg-red-600 p-2 rounded-r-md text-white hover:bg-red-500 transition duration-300" >
                        Search
                    </button>
                </div>

                {errorMessage && (
                    <div className="text-red-500 text-center mb-6">{errorMessage}</div>
                )}

                {data && (
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
                        <h2 className="text-lg font-semibold mb-1">Weather in {data.name}</h2>
                        <p><strong>Temperature:</strong> {data.main.temp}°F</p>
                        <p><strong>Humidity:</strong> {data.main.humidity}%</p>
                        <p><strong>Conditions:</strong> {data.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

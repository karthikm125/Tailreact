import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import sun from './img/sun.jpg';
import clear from './img/clear.jpg';
import cloud from './img/cloud.jpg';
import rain from './img/rain.jpg';
import snow from './img/snow.jpg';

export const Weather = () => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [Image,setimage]=useState(sun);

    const fetchData = async () => {
        try {
            const resource = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0cf3d05c6cb443424f42856d18e090b3`);
                setData(resource.data);
                setErrorMessage('');  
                updateimage(resource.data.weather[0].main);
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while fetching the data. Please try again.");
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const updateimage=(weather)=>{
        switch (weather){
            case'Clear':
            setimage(clear)
            break;
            case'clouds':
            setimage(cloud)
            break;
            case'Rain':
            setimage(rain)
            break;
            case'Snow':
            setimage(snow)
            break;
            default:
                setimage(sun)
                break
        }
    }

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
            <div className="container mx-auto">
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Enter the  city"
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

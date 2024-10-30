import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Movie = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchData = async () => {
        try {
            const resource = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`);
            if (resource.data.Response === "True") {
                setData(resource.data.Search);
                setErrorMessage('');  // Reset the error message
            } else {
                setData([]);
                setErrorMessage('No movies found. Please try another search.');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while fetching the data. Please try again.");
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="bg-gray-900 min-h-screen p-4">
            <div className="container mx-auto">
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        className="w-3/4 sm:w-1/2 p-2 rounded-l-md text-black"
                        onChange={handleChange}
                        value={search}
                    />
                    <button
                        onClick={fetchData}
                        className="bg-red-600 p-2 rounded-r-md text-white hover:bg-red-500 transition duration-300"
                    >
                        Search
                    </button>
                </div>

                {errorMessage && (
                    <div className="text-red-500 text-center mb-6">{errorMessage}</div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {data && data.map((item) => (
                        <div key={item.imdbID} className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
                            <Link to={`/detail/${item.imdbID}`}>
                                {item.Poster !== "N/A" ? (
                                    <img src={item.Poster} alt={item.Title} className="w-full h-72 object-cover rounded-md mb-3" />
                                ) : (
                                    <div className="w-full h-72 bg-gray-700 flex items-center justify-center rounded-md mb-3">
                                        <p>No Image</p>
                                    </div>
                                )}
                            </Link>
                            <h2 className="text-lg font-semibold mb-1">{item.Title}</h2>
                            <p className="text-gray-400">{item.Year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

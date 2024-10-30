import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Detail = () => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams(); 
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resource = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`);
                if (resource.data.Response === "True") {
                    setData(resource.data);
                    setErrorMessage('');
                } else {
                    setErrorMessage('Movie not found.');
                    setData(null); 
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage('An error occurred while fetching the movie details. Please try again.');
            }
        };

        fetchData();
    }, [id]); 

    if (!data && !errorMessage) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen p-4 text-white">
            <div className="container mx-auto">
                {errorMessage ? (
                    <h1 className="text-4xl font-bold mb-4">{errorMessage}</h1>
                ) : (
                    <>
                        <h1 className="text-4xl font-bold mb-4">{data.Title}</h1>
                        {data.Poster !== "N/A" ? (
                            <img src={data.Poster} alt={data.Title} className="w-1 md:w-1/2 mb-4" />
                        ) : (
                            <div className="w-full h-72 bg-gray-700 flex items-center justify-center rounded-md mb-3">
                                <p>No Image</p>
                            </div>
                        )}
                        <p><strong>Year:</strong> {data.Year}</p>
                        <p><strong>Genre:</strong> {data.Genre}</p>
                        <p><strong>Plot:</strong> {data.Plot}</p>
                        <p><strong>Director:</strong> {data.Director}</p>
                        <p><strong>Actors:</strong> {data.Actors}</p>
                        <p><strong>imdbID:</strong> {data.imdbID}</p>
                    </>
                )}
            </div>
        </div>
    );
};

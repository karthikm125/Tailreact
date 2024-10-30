import React, { useState } from 'react';

export const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        if (input.trim()) {
            setTodo([...todo, input]);
            setInput('');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-700 p-4'>
            <div className='bg-slate-300 p-6 rounded shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-extrabold mb-4 text-center'>
                    TODO LIST
                </h2>
                <form onSubmit={addTodo} className='flex'>
                    <input
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className='w-full p-2 border border-gray-400 rounded-l focus:outline-none'
                        placeholder='Enter a new task'
                    />
                    <button
                        type='submit'
                        className='bg-blue-400 text-white px-4 rounded-r hover:bg-blue-800 transition duration-300'
                    >
                        Add
                    </button>
                </form>
                <ul className='mt-4 space-y-2'>
                    {todo.map((task, index) => (
                        <li
                            key={index}
                            className='flex justify-between items-center bg-gray-200 p-2 rounded'
                        >
                            <span>{task}</span>
                            <button
                                onClick={() => deleteTodo(index)}
                                className='bg-red-500 text-yellow-50 px-2 py-1 rounded hover:bg-red-800'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

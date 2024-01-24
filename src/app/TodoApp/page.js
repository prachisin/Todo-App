"use client"
import React, { useState } from 'react';

export default function Page() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        setTodos([...todos, inputValue]);
        setInputValue('');
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className='mx-auto py-10 max-w-md'>
            <h1 className='text-3xl text-center p-5 font-bold mb-4'>TODO App</h1>
            <div className='flex'>
                <input
                    className='border text-black border-gray-400 mr-2 px-4 flex-grow'
                    type='text'
                    placeholder='Enter a todo item'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleAddTodo}
                    className='bg-blue-500 hover:bg-blue-700 t font-bold py-2 px-4 rounded'
                >
                    Add
                </button>
            </div>
            <ul className='list-disc list-inside my-4'>
                {todos.map((todo, index) => (
                    <li key={index} className='flex justify-between items-center mb-2'>
                        {todo}
                        <button
                            onClick={() => handleDeleteTodo(index)} // Wrap in an arrow function
                            className='bg-red-500 text-white font-bold py-1 px-2 rounded'
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

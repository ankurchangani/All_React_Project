import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddMovoieDataAsync } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';

const MovieForm = () => {
    const [formInput, setFormInput] = useState({
        id : '' ,
        title: '',
        genre: '',
        releaseDate: '',
        description: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormInput({...formInput , [name] : value}) ;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(AddMovoieDataAsync(formInput))
        setFormInput({ id : '' ,title: '', genre: '', releaseDate: '', description: '' }); 
        navigate('/view-data');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Movie</h2>
                    <input type="text" name='id'  value={formInput.id}/>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">Movie Title</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                        type="text"
                        id="title"
                        name="title"
                        value={formInput.title}
                        onChange={handleChange}
                        placeholder="Enter movie title"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="genre">Genre</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                        type="text"
                        id="genre"
                        name="genre"
                        value={formInput.genre}
                        onChange={handleChange}
                        placeholder="Enter genre"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="releaseDate">Release Date</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={formInput.releaseDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">Description</label>
                    <textarea
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                        id="description"
                        name="description"
                        value={formInput.description}
                        onChange={handleChange}
                        placeholder="Enter movie description"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MovieForm;

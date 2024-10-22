import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GetDataAsync, DeleteAsync } from '../../services/Action/Action'; 

const ViewData = () => {
    const { movies, error } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(GetDataAsync());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(DeleteAsync(id));
    };

    const handleEdit = (movie) => {
        setTimeout(() => {
            navigate(`/Updatedata/${movie.id}`, { state: { movie } });
        }, 2500);
    };

    const handleView = (movie) => {
        navigate(`/Updatedata/${movie.id}`, { state: { movie } });
    };

    return (
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center mb-4'>Movie Data</h2>

            {error && <div className='bg-red-200 text-red-800 p-2 rounded mb-4'>{error}</div>} {/* Error message */}

            <table className='min-w-full bg-white border border-gray-300'>
                <thead className='bg-blue-600 text-white'>
                    <tr>
                        <th className='py-2 px-4 border-b'>#</th>
                        <th className='py-2 px-4 border-b'>Title</th>
                        <th className='py-2 px-4 border-b'>Genre</th>
                        <th className='py-2 px-4 border-b'>Release Date</th>
                        <th className='py-2 px-4 border-b'>Description</th>
                        <th className='py-2 px-4 border-b'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={movie.id} className='hover:bg-blue-100'>
                            <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
                            <td className='py-2 px-4 border-b text-center'>{movie.title}</td>
                            <td className='py-2 px-4 border-b text-center'>{movie.genre}</td>
                            <td className='py-2 px-4 border-b text-center'>{movie.releaseDate}</td>
                            <td className='py-2 px-4 border-b text-center'>{movie.description}</td>
                            <td className='py-2 px-4 border-b flex space-x-2 justify-center'>
                                <button className='bg-blue-500 p-2 text-white rounded hover:bg-blue-600' onClick={() => handleView(movie)}>
                                    <FaEye />
                                </button>
                                <button className='bg-yellow-500 p-2 text-white rounded hover:bg-yellow-600' onClick={() => handleEdit(movie)}>
                                    <FaEdit />
                                </button>
                                <button className='bg-red-500 p-2 text-white rounded hover:bg-red-600' onClick={() => handleDelete(movie.id)}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default ViewData;

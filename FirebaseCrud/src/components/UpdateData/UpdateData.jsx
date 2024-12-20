import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../service/Action/Action';
import Emp from '../../assets/Emp.jpg'

const EditEmployee = () => {
    const location = useLocation();
    const { employee } = location.state;
    
    const [forminput, setFormInput] = useState(employee);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...forminput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateEmployee(forminput));

        
        navigate('/view-data');
    };

    return (
        <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center">
        <div className="flex-1 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Employee Form
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='id' value={forminput.id} onChange={handleChange} hidden />
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name='name'
                        value={forminput.name}
                        onChange={handleChange}
                        placeholder="Enter the name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name='email'
                        value={forminput.email}
                        onChange={handleChange}
                        placeholder="Enter the email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                        Position
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="position"
                        type="text"
                        name='position'
                        value={forminput.position}
                        onChange={handleChange}
                        placeholder="Enter the position"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

        <div className="flex-1 mb-6 mx-4 lg:mr-6">
            <img
                src={Emp}
                alt="Employee"
                className="w-full h-auto rounded-lg shadow-md"
            />
        </div>
    </div>  
    );
};

export default EditEmployee;

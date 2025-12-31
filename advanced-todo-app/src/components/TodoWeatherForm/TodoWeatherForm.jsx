import React, { useState } from 'react';

const TodoWeatherForm = () => {
  const [formData, setFormData] = useState({
    task: '',
    location: '',
    priority: 'Medium',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">To-Do & Weather Form</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label htmlFor="task" className="block text-gray-700 font-medium mb-1">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your task"
            required
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your city"
            required
          />
        </div>
        
        
        <div className="mb-4">
          <label htmlFor="priority" className="block text-gray-700 font-medium mb-1">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

     
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-700 font-medium mb-1">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
      
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoWeatherForm;

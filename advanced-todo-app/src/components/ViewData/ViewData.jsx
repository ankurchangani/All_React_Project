import React from 'react';

const ViewData = () => {
  return (
    <div className="p-4">
      {/* Weather Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Current Weather</h2>
        <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">City Name</h3>
            <img 
              src="weather-icon.png" 
              alt="weather icon" 
              className="w-12 h-12" 
            />
          </div>
          <p className="text-gray-700">Temp: 25°C</p>
          <p className="text-gray-700">Clear Sky</p>
          <div className="text-sm text-gray-500 mt-2">
            <span>Humidity: 60%</span>
            <span className="ml-4">Wind: 10 km/h</span>
          </div>
        </div>
      </div>

      {/* Data Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-bold mb-2">Task Title 1</h3>
          <p className="text-gray-700 mb-1">This is a brief description of the task.</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>2025-03-27</span>
            <span>High</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-bold mb-2">Task Title 2</h3>
          <p className="text-gray-700 mb-1">This is a brief description of the task.</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>2025-03-28</span>
            <span>Medium</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-bold mb-2">Task Title 3</h3>
          <p className="text-gray-700 mb-1">This is a brief description of the task.</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>2025-03-29</span>
            <span>Low</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;

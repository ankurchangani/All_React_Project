import React, { useState } from 'react';

const Microfiction = () => {
  const [story, setStory] = useState('');
  const [stories, setStories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (story) {
      setStories([...stories, story]);
      setStory('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Microfiction Stories</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Write your microfiction here..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold">Stories:</h2>
        <ul className="list-disc pl-5">
          {stories.map((s, index) => (
            <li key={index} className="mt-2">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Microfiction;
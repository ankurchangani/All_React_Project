import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-80 bg-gray-100">
      <div className="animate-spin border-4 border-t-transparent w-10 h-10 rounded-full border-blue-400"></div>
    </div>
  );
};

export default Loading;

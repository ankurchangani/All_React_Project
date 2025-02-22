import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Bell, Folder, Edit, Archive as ArchiveIcon, Trash as TrashIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <ul className="pt-6">
        <Link to="/">
          <li className="flex items-center space-x-3 px-4 py-2 bg-yellow-100 rounded-r-full cursor-pointer">
            <Lightbulb className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Notes</span>
          </li>
        </Link>
        <Link to="/reminders">
          <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-r-full cursor-pointer">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Reminders</span>
          </li>
        </Link>
        <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-r-full cursor-pointer">
          <Folder className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Labels</span>
        </li>
        <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-r-full cursor-pointer">
          <Edit className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Edit labels</span>
        </li>
        <Link to="/archive">
          <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-r-full cursor-pointer">
            <ArchiveIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Archive</span>
          </li>
        </Link>
        <Link to="/trash">
          <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-r-full cursor-pointer">
            <TrashIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Trash</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

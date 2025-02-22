import React, { useState, } from "react";
import { useDispatch,  } from "react-redux";
import { createNotAsync,  } from "../../Service/Action/takeNotesAction";
import {
  Bell,
  UserPlus,
  Palette,
  Image,
  Archive,
  MoreHorizontal,
  RotateCw,
  RotateCcw,
  Trash2,
  Save,
  Edit,
  ChevronDown,
  Pin,
  Download,
} from "lucide-react";

const CreateNote = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [reminder, setReminder] = useState("");
  const [error, setError] = useState("");
  const [note, setNote] = useState({
    title: "",
    note: "",
  });
  const dispatch = useDispatch();

  const handleExpand = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  const handleSaveNote = () => {
    if (!note.title && !note.note) {
      setError("Note cannot be empty");
      return;
    }
    dispatch(createNotAsync(note));
    setNote({ title: "", note: "" });
    setError("");
  };

  const reminderOptions = [
    "Remind me later",
    "Saved in Google Reminders",
    "Later today: 8 AM",
    "Tomorrow: 8 AM",
    "Next week: 8 AM",
    "Pick date & time",
    "Pick place",
  ];

  return (
    <div className="flex justify-center mt-5">
      <div
        className={`w-[500px] bg-white shadow-lg rounded-2xl p-3 border border-gray-200 transition-all ${
          isExpanded ? "h-auto" : "h-12"
        }`}
      >
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {/* Title Input */}
        {isExpanded && (
          <input
            type="text"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            placeholder="Title"
            className="w-full text-lg font-medium text-gray-800 placeholder-gray-500 outline-none border-b border-gray-300 mb-2 px-2 py-1"
          />
        )}

        {/* Note Input */}
        <textarea
          placeholder="Take a note..."
          value={note.note}
          rows={isExpanded ? "4" : "1"}
          className="w-full text-gray-700 placeholder-gray-500 outline-none resize-none bg-transparent px-2 py-1"
          onClick={handleExpand}
          onChange={(e) => setNote({ ...note, note: e.target.value })}
          readOnly={!isExpanded}
        />

        {isExpanded && (
          <div className="flex justify-between items-center mt-2 relative">
            {/* Icons Section */}
            <div className="flex space-x-4 text-gray-600 relative">
              {/* Reminder Dropdown */}
              <div className="relative">
                <div
                  className="flex items-center space-x-1 cursor-pointer hover:text-blue-600"
                  onClick={() => setShowReminder(!showReminder)}
                >
                  <Bell className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4" />
                </div>
                {showReminder && (
                  <div className="absolute top-8 left-0 bg-white shadow-md border border-gray-200 rounded-lg w-52 p-2 z-10">
                    {reminderOptions.map((option, index) => (
                      <div
                        key={index}
                        className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setReminder(option);
                          setShowReminder(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <UserPlus className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Palette className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Image className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Archive className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <MoreHorizontal className="h-5 w-5 cursor-pointer hover:text-blue-600" />
            </div>
            
            {/* Actions Section */}
            <div className="flex space-x-4 text-gray-600">
              <Edit className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Save
                className="h-5 w-5 cursor-pointer hover:text-green-600"
                onClick={handleSaveNote}
              />
              <Trash2 className="h-5 w-5 cursor-pointer hover:text-red-600" />
            </div>
            
            <button className="text-gray-600 font-medium" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNote;

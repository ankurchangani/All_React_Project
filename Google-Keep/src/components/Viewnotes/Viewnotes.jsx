import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesAsync } from '../../Service/Action/takeNotesAction';
import { Pin, Bell, UserPlus, Palette, Image, Download } from 'lucide-react';

const ViewNotes = () => {
  const dispatch = useDispatch();
  const { notes, loading, error } = useSelector((state) => state.TakenotesReducer);

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full text-green-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <div className='flex justify-center  flex-wrap'>
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Notes</h2>
        <div className='flex justify-center items-center flex-wrap'>

          <div className="grid grid-cols-3 gap-4 mx-7">
            {notes.map((note) => (
              <div key={note.id} className="bg-green-100 p-4 rounded-lg shadow-md relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{note.title}</h3>
                  <Pin className="text-gray-600 cursor-pointer" />
                </div>
                <p className="text-gray-600 my-2">{note.note}</p>
                <span className="bg-gray-200 px-2 py-1 text-xs rounded">{note.author}</span>
                <div className="flex justify-between mt-2 text-gray-600 text-sm">
                  <Bell className="cursor-pointer" />
                  <UserPlus className="cursor-pointer" />
                  <Palette className="cursor-pointer" />
                  <Image className="cursor-pointer" />
                  <Download className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNotes;

import React, { useReducer } from 'react';
import reducerCounter from '../ReducerReact/ReducerCounter';

const initialState = { count: 0 };

const Counter = () => {
    const [state, dispatch] = useReducer(reducerCounter, initialState);

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Counter</h1>
                <p className="text-xl mb-4">Count: <span className="font-semibold">{state.count}</span></p>
                <div className="flex space-x-4">
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        onClick={() => dispatch({ type: 'increment' })}
                    >
                        Increment
                    </button>
                    <button 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={() => dispatch({ type: 'decrement' })} 
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionInc, actionDec } from '../../Services/Action/counterAction';

const Counter = () => {
    const {count} = useSelector(state => state.reducerCounter);
    const dispatch = useDispatch(); 

    const handleInc = () => {
        dispatch(actionInc());
    };

    const handleDec = () => {
        dispatch(actionDec());
    };

    return (
        <>
            <div>Counter</div>
            <button onClick={handleInc}>+</button>
            <span>{count}</span>
            <button onClick={handleDec}>-</button>
        </>
    );
};

export default Counter;

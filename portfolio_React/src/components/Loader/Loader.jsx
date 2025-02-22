import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='main-c'>
            <div className="multi-spinner-container">
                <div className="multi-spinner">
                    <div className="multi-spinner">
                        <div className="multi-spinner">
                            <div className="multi-spinner">
                                <div className="multi-spinner">
                                    <div className="multi-spinner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Loader;

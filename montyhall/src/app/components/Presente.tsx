import React from 'react';

export default function Presente() {
    return (
        <div className="w-32 h-32 bg-yellow-300 border-4 border-yellow-500 rounded-lg absolute bottom-0 ">
            <div className="absolute top-1/2 left-0 w-full h-4 bg-red-500 transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 w-4 h-full bg-red-500 transform -translate-x-1/2"></div>
            <div className="bow absolute left-1/2 top-1/2 w-8 h-8 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <div className="w-2 h-2 bg-red-700 rounded-full"></div>
            </div>
        </div>
    );
}

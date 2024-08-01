import React from 'react';
import { useState, useEffect } from 'react';
import Presente from '../components/Presente'


interface PortaProps {
    openVerify: boolean;
    checkPresente: boolean;
}

const Porta: React.FC<PortaProps> = ({ checkPresente, openVerify }) => {
    const [openDoor, setOpen] = useState<boolean>()

    useEffect(() => {
        if (openVerify === true) {
            setOpen(false)
        }
    }, [openVerify])

    return (
        <div>
            {!openDoor ? (
                <div className="w-40 h-72 bg-gray-300 border-4 border-gray-500 rounded-lg relative">
                    <div className="absolute top-4 left-4 right-4 h-1/3 bg-gray-400 border-b-4 border-gray-500 text-center align-middle">
                        {/* {checkPresente ? '1' : '0'} */}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-1/3 bg-gray-400 border-t-4 border-gray-500"></div>
                    <div onClick={() => setOpen(true)} className="absolute bottom-1/4 right-6 w-6 h-6 bg-yellow-500 rounded-full border-2 border-gray-700"></div>
                </div>
            ) : (
                <div>
                    <div className="w-40 h-72 bg-black border-4 border-gray-500 rounded-lg relative">
                        {checkPresente && <Presente />}
                    </div>
                </div>)}
        </div>
    );
};

export default Porta;

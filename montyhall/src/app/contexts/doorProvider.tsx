'use client'
import { createContext, useState, ReactNode, useContext, FC } from 'react';

interface DoorContextType {
    numberDoor: number;
    setNumberDoor: (number: number | ((prev: number) => number)) => void;
}

const DoorContext = createContext<DoorContextType | undefined>(undefined);

export default function useDoorContext() {
    const context = useContext(DoorContext);
    if (!context) {
        throw new Error("useDoorContext must be used within a DoorProvider");
    }
    return context;
};

interface MyProviderProps {
    children: ReactNode;
}

export const MyProvider: FC<MyProviderProps> = ({ children }) => {
    const [numberDoor, setNumberDoor] = useState(0);

    return (
        <DoorContext.Provider value={{ numberDoor, setNumberDoor }}>
            {children}
        </DoorContext.Provider>
    );
};

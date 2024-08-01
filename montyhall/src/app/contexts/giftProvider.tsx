'use client'
import { createContext, useState, ReactNode, useContext, FC } from 'react';

interface GiftContextType {
    numberGift: number;
    setNumberGift: (number: number | ((prev: number) => number)) => void;
}

const GiftContext = createContext<GiftContextType | undefined>(undefined);

export default function useGiftContext() {
    const context = useContext(GiftContext);
    if (!context) {
        throw new Error("useDoorContext must be used within a DoorProvider");
    }
    return context;
};

interface MyProviderProps {
    children: ReactNode;
}

export const MyProviderGift: FC<MyProviderProps> = ({ children }) => {
    const [numberGift, setNumberGift] = useState(0);

    return (
        <GiftContext.Provider value={{ numberGift, setNumberGift }}>
            {children}
        </GiftContext.Provider>
    );
};

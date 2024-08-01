'use client'
import Porta from '../../../../components/Porta';
import useDoorContext from '../../../../contexts/doorProvider';
import useGiftContext from '../../../../contexts/giftProvider'
import { useState, useEffect } from 'react';
import Link from 'next/link'


export default function Game() {
    const { numberDoor } = useDoorContext();
    const { numberGift } = useGiftContext();
    const [checkPresente, setCheck] = useState<number[]>([]);
    const [openVerify, setVerify] = useState<boolean>(false);


    useEffect(() => {
        let portas = Array(numberDoor).fill(0);
        let count = 0;

        while (count < numberGift) {
            const randomIndex = Math.floor(Math.random() * numberDoor);
            if (portas[randomIndex] === 0) {
                portas[randomIndex] = 1;
                count++;
            }
        }

        setCheck(portas);
    }, [numberDoor, numberGift]);

    return (
        <main className='h-screen w-screen bg-black flex flex-col justify-center gap-2'>
            <div className="flex flex-row gap-2">
                {checkPresente.map((valor, index) => (
                    <div key={index}>
                        <Porta
                            openVerify={openVerify}
                            checkPresente={valor === 1} />
                    </div>
                ))}
            </div>
            <div className='flex gap-4'>
                <Link href="/"><div className=' rounded w-28 h-auto p-8 bg-green-600 text-white text-center'>INICIO</div></Link>
                <div onClick={() => setVerify(!openVerify)} className="rounded w-28 h-auto p-8 bg-red-600 text-white text-center"> RESET</div>
            </div>
        </main>
    );
}

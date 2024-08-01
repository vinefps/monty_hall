'use client'
import Link from 'next/link'
import useDoorContext from './contexts/doorProvider';
import useGiftContext from "./contexts/giftProvider";

export default function Home() {
  const { numberGift, setNumberGift } = useGiftContext();
  const { numberDoor, setNumberDoor } = useDoorContext();

  function aumentarPortas() {
    if (numberDoor < 8) {
      setNumberDoor((prev) => prev + 1)
    }
  }
  function diminuirPortas() {
    if (numberDoor > 0) {
      setNumberDoor((prev) => prev - 1)
    }
  }
  function aumentarPresentes() {
    if (numberGift < 3) {
      setNumberGift((prev) => prev + 1)
    }
  }
  function diminuirPresentes() {
    if (numberGift > 0) {
      setNumberGift((prev) => prev - 1)
    }
  }


  return (
    <main className="flex justify-center bg-gray-400">
      <div className="w-2/4 h-screen grid grid-cols-2 grid-rows-2 gap-2">
        <div className="h-full border-2 text-7xl text-white bg-red-600">Monty Hall</div>
        <div className="flex flex-col gap-6 justify-center items-center h-full border-2 bg-white">
          <div className="text-5xl">Qtd de portas?</div>
          <div className="text-8xl">{numberDoor}</div>
          <div className="flex gap-2 ">
            <div onClick={diminuirPortas} className="text-center bg-gray-200 w-[30px] h-[30px]">-</div>
            <div onClick={aumentarPortas} className="text-center bg-gray-200 w-[30px] h-[30px]">+</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center h-full border-2 bg-white">
          <div className="text-5xl text-center">Porta com presentes?</div>
          <div className="text-8xl">{numberGift}</div>
          <div className="flex gap-2 ">
            <div onClick={diminuirPresentes} className="text-center bg-gray-200 w-[30px] h-[30px]">-</div>
            <div onClick={aumentarPresentes} className="text-center bg-gray-200 w-[30px] h-[30px]">+</div>
          </div>
        </div>
        <Link href={`/game/${numberDoor}/${numberGift}`}>
          <div className="h-full border-2 text-5xl text-white bg-green-600">Iniciar</div>
        </Link>
      </div>
    </main>
  );
}
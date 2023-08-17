import { Dispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useAppDispatch } from "../Redux-lib/redux-hooks";
import { add, divide, multiply,reset, subtract } from "../Redux-lib/redux-slice";

const dispatch = useAppDispatch();

function Keypad() {
    return (
        <div className="mt-10 flex justify-center">
            <div className="w-1/2">
                <div className="border-solid border-4 border-black rounded-md px-6 py-4 text-xl bg-stone-100">
                    <div className="grid grid-cols-2 gap-2">
                        <NumPads/>
                        <OperationPads/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NumPads() {
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,0];
    const [numval, setNumVal] = useState<number>(0);
    

    const handleInput = (num: number) => {
        setNumVal(prevNum => (prevNum * 10) + num); 
    }
    useEffect(() => {
       
    }, [numval]);

    return (
        <div className="grid grid-cols-3 gap-1">
            {
                numbers.map(num => {
                    return(
                        <button className="w-14 h-14 border-solid border-2 border-black rounded-md p-4 flex items-center justify-center bg-green-400 drop-shadow-lg" onClick={() => handleInput(num)}>
                            { num }
                        </button>
                    )
                })
            }
        </div>
    )
}

function OperationPads() {
    const operators: string[] = ["+","-","*","/","=","AC"];
     return (
        <div className="grid grid-cols-3 gap-1">
            {
                operators.map(symbol => {
                    return (
                        <button className="w-14 h-14 border-solid border-2 border-black rounded-md p-4 flex items-center justify-center bg-teal-400 drop-shadow-lg">
                            { symbol }
                        </button>
                    )
                })
            }
        </div>
     )
}

export default Keypad;
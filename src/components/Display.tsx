import { useAppSelector } from "../Redux-lib/redux-hooks";

function Display() {

    const calculatedValue = useAppSelector((state) => state.calculate.output);

    return (
        <div className="mt-20 flex justify-center">
            <div className="w-1/2">
                <div className="border-solid border-4 border-black rounded-md px-6 py-4 text-3xl">
                    { calculatedValue }
                </div>
            </div>
        </div>
    )
}

export default Display;
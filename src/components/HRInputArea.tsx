import InputField from "./InputField.tsx";
import CalculateHRZOnes from "../logic/calculations.ts";
import {useState} from "react";
import {HRZone} from "../logic/HRZone.ts";

type HRInputAreaProps = {
    selectedMethod: string;
    handleZoneCalculation: (input: Array<HRZone>) => void;
}

export default function HRInputArea({selectedMethod, handleZoneCalculation}: HRInputAreaProps) {
    const [age, setAge] = useState("");
    const [restHr, setRestHr] = useState("");
    const [maxHr, setMaxHr] = useState("");
    const [ltHr, setLtHr] = useState("");


    function handleHrCalculation() {
        const results = CalculateHRZOnes(selectedMethod, age, restHr, maxHr, ltHr);
        handleZoneCalculation(results);
    }

    return (
        <section className='flex place-content-center bg-purple-700 py-2'>
            {selectedMethod === "HRR" ?
            <>
                <InputField label="Rest HR" onChange={setRestHr} fieldValue={restHr}/>
                <InputField label="Max HR" onChange={setMaxHr} fieldValue={maxHr}/>
            </>
            : selectedMethod === "LTHR" ?
                <InputField label="Your LTHR" onChange={setLtHr} fieldValue={ltHr}/>
                :
                <InputField label="Your Age" onChange={setAge} fieldValue={age}/>
        }
            <button className="px-20 py-1 bg-neutral-900 mx-3 rounded-xl text-gray-100"
                    onClick={handleHrCalculation}>Calculate HR Zones
            </button>
    </section>)
}
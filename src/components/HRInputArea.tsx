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

    return (<section className='hr-area'>
        {selectedMethod === "RHR" ?
            <>
                <InputField label="Rest HR" onChange={setRestHr} fieldValue={restHr}/>
                <InputField label="Max HR" onChange={setMaxHr} fieldValue={maxHr}/>
            </>
            : selectedMethod === "LTHR" ?
                <InputField label="Your LTHR" onChange={setLtHr} fieldValue={ltHr}/>
                :
                <InputField label="Your Age" onChange={setAge} fieldValue={age}/>
        }
        <button className="calc-btn" onClick={handleHrCalculation}>Calculate Zones</button>
    </section>)
}
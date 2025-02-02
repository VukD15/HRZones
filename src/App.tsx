import './App.css'
import ButtonSection from "./components/ButtonSection.tsx";
import HRInputArea from "./components/HRInputArea.tsx";
import ZoneSection from "./components/ZoneSection.tsx";
import {useState} from "react";
import {HRZone} from "./logic/HRZone.ts";

function App() {
    const [calcMethod, setCalcMethod] = useState("MHR");
    const [hrZones, setHrZones] = useState<HRZone[]>([new HRZone("", 0, 0)]);

    function handleHrZones(hrZoneCalculation: Array<HRZone>) {
        setHrZones(hrZoneCalculation)
    }

    function handleCalcMeth(selectedMethod: string) {
        setCalcMethod(selectedMethod);
    }

    return (
        <>
            <ButtonSection selectedButton={calcMethod} handleSelectedCalcMethod={handleCalcMeth}/>
            <HRInputArea selectedMethod={calcMethod} handleZoneCalculation={handleHrZones}/>
            <ZoneSection hrCalcResults={hrZones}/>
        </>
    )
}

export default App

import './index.css'
import ButtonSection from "./components/ButtonSection.tsx";
import HRInputArea from "./components/HRInputArea.tsx";
import ZoneSection from "./components/ZoneSection.tsx";
import {useState} from "react";
import {HRZone} from "./logic/HRZone.ts";
import MethodButton from "./components/MethodButton.tsx";

function App() {
    const [calcMethod, setCalcMethod] = useState("MHR");
    const [hrZones, setHrZones] = useState<HRZone[]>([new HRZone("", 0, 0)]);

    function handleHrZones(hrZoneCalculation: Array<HRZone>) {
        setHrZones(hrZoneCalculation)
    }

    function handleCalcMeth(selectedMethod: string) {
        setCalcMethod(selectedMethod);
        setHrZones([new HRZone("", 0, 0)]);
    }

    return (
        <>
            <ButtonSection>
                <MethodButton label={"MHR"} isActive={calcMethod === "MHR"} onCLickAction={handleCalcMeth}/>
                <MethodButton label={"HRR"} isActive={calcMethod === "HRR"} onCLickAction={handleCalcMeth}/>
                <MethodButton label={"LTHR"} isActive={calcMethod === "LTHR"} onCLickAction={handleCalcMeth}/>
            </ButtonSection>
            <HRInputArea selectedMethod={calcMethod} handleZoneCalculation={handleHrZones}/>
            <ZoneSection hrCalcResults={hrZones}/>
        </>
    )
}

export default App

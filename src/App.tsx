import './index.css'
import ButtonSection from "./components/ButtonSection.tsx";
import HRInputArea from "./components/HRInputArea.tsx";
import {useState} from "react";
import {HRZone} from "./logic/HRZone.ts";
import MethodButton from "./components/MethodButton.tsx";
import data from "./assets/data.json";
import ZoneComponent from "./components/ZoneComponent.tsx";
import ZoneRange from "./components/ZoneRange.tsx";
import ZoneCalcResults from "./components/ZoneCalcResults.tsx";

type ZoneObject = {
    id: string,
    zoneStyleCode: string,
    minPercent: number,
    maxPercent: number,
    zoneDescription: string
}

const zoneData: ZoneObject[] = data;

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
            <section className="flex-col bg-neutral-900 p-2 max-h-max">
                {zoneData.map(function (zone: ZoneObject) {
                    return (
                        <ZoneComponent zoneStyleCode={zone.zoneStyleCode}>
                            <ZoneRange zoneName={zone.id} minPercent={zone.minPercent} maxPercent={zone.maxPercent}/>
                            <ZoneCalcResults zoneMin={hrZones[parseInt(zone.id) - 1]?.zoneMin}
                                             zoneMax={hrZones[parseInt(zone.id) - 1]?.zoneMax}
                            />
                            <span
                                className="text-gray-100 align-middle border-l-black border-solid border-l-10 p-2 max-w-3xl">
                                 <p>{zone.zoneDescription}</p>
                             </span>
                        </ZoneComponent>)
                })
                }
            </section>
        </>
    )
}

export default App

import ZoneRange from "./ZoneRange.tsx";
import ZoneCalcResults from "./ZoneCalcResults.tsx";
import {HRZone} from "../logic/HRZone.ts";

type ZoneComponentProps = {
    zoneName: string;
    zoneStyleCode: string;
    minPercent?: number;
    maxPercent?: number;
    zoneDescription: string;
    zoneCalcResults?: HRZone;
}

export default function ZoneComponent({
                                          zoneName,
                                          zoneStyleCode,
                                          minPercent,
                                          maxPercent,
                                          zoneDescription,
                                          zoneCalcResults
                                      }: ZoneComponentProps) {

    return (
        <section className={`flex grow m-2 min-h-15 place-content-around ${zoneStyleCode}`}>
            <>
                <ZoneRange zoneName={zoneName} minPercent={minPercent} maxPercent={maxPercent}/>
                <ZoneCalcResults zoneMin={zoneCalcResults?.zoneMin} zoneMax={zoneCalcResults?.zoneMax}/>
                <span className="text-gray-100 align-middle border-l-black border-solid border-l-10 p-2 max-w-3xl">
                  <span>{zoneDescription}</span>
            </span>
            </>
        </section>
    )
}
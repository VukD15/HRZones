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
        <section id="zone" className={zoneStyleCode}>
            <>
                <ZoneRange zoneName={zoneName} minPercent={minPercent} maxPercent={maxPercent}/>
                <ZoneCalcResults zoneMin={zoneCalcResults?.zoneMin} zoneMax={zoneCalcResults?.zoneMax}/>
                <span className="zone-description">
                  <span>{zoneDescription}</span>
            </span>
            </>
        </section>
    )
}
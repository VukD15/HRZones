import ZoneComponent from "./ZoneComponent.tsx";
import {HRZone} from "../logic/HRZone.ts";
import data from "../assets/data.json";

type ZoneSectionProps = {
    hrCalcResults: HRZone[];
}

type ZoneObject = {
    id: string,
    zoneStyleCode: string,
    minPercent: number,
    maxPercent: number,
    zoneDescription: string
}

export default function ZoneSection({hrCalcResults}: ZoneSectionProps) {
    const zoneData: ZoneObject[] = data;

    return (
        <section className="zone-section">
            {zoneData.map(function (zone: ZoneObject) {
                return (
                    <ZoneComponent
                        zoneCalcResults={hrCalcResults[parseInt(zone.id) - 1]}
                        zoneName={zone.id}
                        zoneStyleCode={zone.zoneStyleCode}
                        minPercent={zone.minPercent}
                        maxPercent={zone.maxPercent}
                        zoneDescription={zone.zoneDescription}
                    />)
            })
            }
        </section>


    )
}
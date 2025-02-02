import ZoneComponent from "./ZoneComponent.tsx";
import {HRZone} from "../logic/HRZone.ts";
import data from "../assets/data.json";

type ZoneSectionProps = {
    hrCalcResults: HRZone[];
}

export default function ZoneSection({hrCalcResults}: ZoneSectionProps) {
    const dataToString = JSON.stringify(data);
    const zoneData = JSON.parse(dataToString);

    type ZoneObject = {
        id: string,
        zoneStyleCode: string,
        minPercent: number,
        maxPercent: number,
        zoneDescription: string
    }

    return (
        <section className="zone-section">
            {zoneData.map(function (zone: ZoneObject) {
                console.log(zone)
                console.log("kalk rez ", hrCalcResults[parseInt(zone.id) - 1])
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
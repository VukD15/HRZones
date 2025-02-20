type CalcResultProps = {
    zoneMin?: number;
    zoneMax?: number;
}
export default function ZoneCalcResults({zoneMin = 0, zoneMax = 0}: CalcResultProps) {
    return (
        <div className="flex mx-2 place-items-center">
            <h4 className="text-gray-100 text-xl align-middle">{zoneMin} bpm - {zoneMax} bpm</h4>
        </div>
    )
}
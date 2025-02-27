type CalcResultProps = {
    zoneMin?: number;
    zoneMax?: number;
}
export default function ZoneCalcResults({zoneMin = 0, zoneMax = 0}: CalcResultProps) {
    return (
        <div className="flex mx-2 min-w-45 place-items-center justify-center">
            <h4 className="text-gray-100 text-xl text-center">{zoneMin} bpm - {zoneMax} bpm</h4>
        </div>
    )
}
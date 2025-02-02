type CalcResultProps = {
    zoneMin?: number;
    zoneMax?: number;
}
export default function ZoneCalcResults({zoneMin = 0, zoneMax = 0}: CalcResultProps) {
    return (
        <section className="zone-results">
            <h3>{zoneMin} bpm - {zoneMax} bpm</h3>
        </section>
    )
}
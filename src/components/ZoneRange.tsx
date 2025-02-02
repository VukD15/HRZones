type ZoneRangeProps = {
    zoneName: string;
    minPercent?: number;
    maxPercent?: number;
}

export default function ZoneRange({zoneName, minPercent, maxPercent}: ZoneRangeProps) {
    return (
        <span className="zone-range">
            <h2>Zone {zoneName}</h2>
            <h5>({minPercent}% - {maxPercent}%)</h5>
        </span>
    )
}
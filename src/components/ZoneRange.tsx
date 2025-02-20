type ZoneRangeProps = {
    zoneName: string;
    minPercent?: number;
    maxPercent?: number;
}

export default function ZoneRange({zoneName, minPercent, maxPercent}: ZoneRangeProps) {
    return (
        <span className="flex-col align-self min-h-20 border-r-black border-r-solid border-r-10 min-w-30">
            <h2 className="text-gray-100 text-2xl font-bold">Zone {zoneName}</h2>
            <h5 className="text-gray-100">({minPercent}% - {maxPercent}%)</h5>
        </span>
    )
}
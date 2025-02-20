import React from "react";

type ZoneComponentProps = {
    zoneStyleCode: string;
    children: React.ReactNode;
}

export default function ZoneComponent({children, zoneStyleCode}: ZoneComponentProps) {
    return (
        <section className={`flex grow m-2 min-h-15 place-content-around ${zoneStyleCode}`}>
            {children}
        </section>
    )
}
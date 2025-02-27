import React from "react";

type ZoneComponentProps = {
    zoneStyleCode: string;
    children: React.ReactNode;
}

export default function ZoneComponent({children, zoneStyleCode}: ZoneComponentProps) {
    return (
        <section className={`flex grow mb-2 min-h-15 ${zoneStyleCode}`}>
            {children}
        </section>
    )
}
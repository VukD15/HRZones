import {ReactNode} from "react";

type ButtonSectionProps = {
    children: ReactNode;
}

export default function ButtonSection({children}: ButtonSectionProps) {
    return (
        <section className="flex place-content-center bg-purple-800 py-3">
            {children}
        </section>
    )
}
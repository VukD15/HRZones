import {ReactNode} from "react";

type ButtonSectionProps = {
    children: ReactNode;
}

export default function ButtonSection({children}: ButtonSectionProps) {
    return (
        <section className='button-section'>
            {children}
        </section>
    )
}
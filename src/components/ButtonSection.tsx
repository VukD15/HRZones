import MethodButton from "./MethodButton.tsx";

type ButtonSectionProps = {
    selectedButton: string;
    handleSelectedCalcMethod: (selectedMethod: string) => void;
}

export default function ButtonSection({selectedButton, handleSelectedCalcMethod}: ButtonSectionProps) {
    return (
        <section className='button-section'>
            <MethodButton label={"MHR"} isActive={selectedButton === "MHR"} onCLickAction={handleSelectedCalcMethod}/>
            <MethodButton label={"RHR"} isActive={selectedButton === "RHR"} onCLickAction={handleSelectedCalcMethod}/>
            <MethodButton label={"LTHR"} isActive={selectedButton === "LTHR"} onCLickAction={handleSelectedCalcMethod}/>
        </section>
    )
}
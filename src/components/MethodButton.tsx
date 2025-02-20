type CalcBtnProps = {
    label: string;
    isActive: boolean;
    onCLickAction: (label: string) => void;
}

export default function MethodButton({label, isActive, onCLickAction}: CalcBtnProps) {
    const classes = `px-30 py-3 bg-neutral-900 mx-10 rounded-xl text-gray-100 cursor-default transition duration-100 ${isActive ? "border-yellow-300 border-2 rounded-xl" : ""}`
    return (<button className={classes} onClick={() => {
        onCLickAction(label)
    }}>
        % {label}
    </button>);
}

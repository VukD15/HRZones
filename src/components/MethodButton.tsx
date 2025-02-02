type CalcBtnProps = {
    label: string;
    isActive: boolean;
    onCLickAction: (label: string) => void;
}

export default function MethodButton({label, isActive, onCLickAction}: CalcBtnProps) {
    const classes = `calc-btn + ${isActive ? "selected" : ""}`;
    return (<button className={classes} onClick={() => {
        onCLickAction(label)
    }}>
        % {label}
    </button>);
}

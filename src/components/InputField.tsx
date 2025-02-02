type InputFieldProps = {
    label: string;
    fieldValue: string;
    onChange: (value: string) => void;
}

export default function InputField({label, fieldValue, onChange}: InputFieldProps) {
    return (
        <>
            <label>{label}
                <input type="number" className="input-style" value={fieldValue}
                       onChange={(e) => onChange(e.target.value)}/>
            </label>
        </>
    )
}
type InputFieldProps = {
    label: string;
    fieldValue: string;
    onChange: (value: string) => void;
}

export default function InputField({label, fieldValue, onChange}: InputFieldProps) {
    const style = "mx-5 bg-neutral-900 w-20 h-10 rounded-xl text-center .no-spinner";
    return (
        <>
            <label className="text-gray-100">{label}
                <input type="number" className={style} value={fieldValue}
                       onChange={(e) => onChange(e.target.value)}/>
            </label>
        </>
    )
}
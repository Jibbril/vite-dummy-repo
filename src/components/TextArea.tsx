import { TextAreaProps } from "./Interfaces"

export default function TextArea({id, name, onChange, value}: TextAreaProps) {

    const sureId = id ? id : name.toLowerCase() + "_input";
    return (
        <>
            <label htmlFor={id}>{value}</label>
            <textarea
                id={sureId}
                name={name}
                onChange={onChange}
                value={value}
            />
        </>
    )
}
import { InputProps } from "./Interfaces"

export default function Input({id, name, type, onChange, value}: InputProps) {

    const sureId = id ? id : name.toLowerCase() + "_input";
    return (
        <>
            <label htmlFor={id}>{value}</label>
            <input
                onChange={onChange}
                id={sureId}
                name={name}
                value={value}
                type={type}
            />
        </>
    )
}
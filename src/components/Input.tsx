import { InputProps } from "./Interfaces"

export default function Input({id, name, type}: InputProps) {

    const sureId = id ? id : name.toLowerCase() + "_input";
    return (
        <>
            <label htmlFor={id}>{name}</label>
            <input
                id={sureId}
                name={name}
                type={type}
            />
        </>
    )
}
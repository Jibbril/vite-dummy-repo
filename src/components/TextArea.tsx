import { BaseProps } from "./Interfaces"

export default function TextArea({id, name}: BaseProps) {

    const sureId = id ? id : name.toLowerCase() + "_input";
    return (
        <>
            <label htmlFor={id}>{name}</label>
            <textarea
                id={sureId}
                name={name}
            />
        </>
    )
}
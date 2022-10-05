import { CSSProperties, FC } from "react";

const Input = (prop: { title: string, type: string, name: string, style?: CSSProperties}) => {
    return (
        <fieldset style={prop.style}>
            <legend>{prop.title}</legend>
            <input type={prop.type} name={prop.name}/>
        </fieldset>
    )
}

export default Input;
import { CSSProperties, FC, useRef } from "react";
import styles from "./Input.module.scss";

const Input: FC<{title: string, type: string, name: string, style?: CSSProperties}> = (prop) => {

    const input: any = useRef();

    const focusBorder = () => {
        input.current.offsetParent.style.borderColor = "black"; 
    }
    const unfocusBorder = () => {
        input.current.offsetParent.style.borderColor = "#CACACA"; 
    }

    return (
        <fieldset style={prop.style} className={styles.fieldset}>
            <input onFocus={focusBorder} onBlur={unfocusBorder} ref={input} type={prop.type} name={prop.name}/>
            <legend>{prop.title}</legend>
        </fieldset>
    )
}

export default Input;
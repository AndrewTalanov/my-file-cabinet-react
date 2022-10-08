import style from "./ButtonAdd.module.scss";
import svg from "../../assets/img/plus.svg";
import { FC, useRef } from "react";

const ButtonAdd: FC = () => {

    const span: any = useRef();

    const hoverSpan = () => {
        span.current.style.display = "block";
    }
    const unhoverSpan = () => { 
        span.current.style.display = "none";    
    }

    return (
        <button className={style.button} onMouseEnter={hoverSpan} onMouseLeave={unhoverSpan}>
            <span ref={span}>Добавить папку</span>
            <img src={svg} alt="plus" />
        </button>
    )
}

export default ButtonAdd;
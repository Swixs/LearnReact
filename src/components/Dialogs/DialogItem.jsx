import { NavLink } from "react-router-dom";
import ClassDialogs from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = '/Dialogs' + props.id

    return <div className={ClassDialogs.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem
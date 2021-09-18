import { Fragment } from "react"
import classes from "../UI/Model.module.css"


import ReactDOM from 'react-dom';

const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} ></div>
}

const ModelOverLay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}  onClick={props.onClose}>{props.children}</div>
    </div>)
}

const mainContainer = document.getElementById('overlays');
const Model = (props) => {
    return (
       <Fragment>
          {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, mainContainer)} 
          {ReactDOM.createPortal(<ModelOverLay>{props.children}</ModelOverLay>, mainContainer)} 
       </Fragment>
    )
}

export default Model;
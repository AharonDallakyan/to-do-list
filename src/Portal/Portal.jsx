import React from "react";
import ReactDOM from "react-dom";

function Portal (props){
    return ReactDOM.createPortal(
        <div className="portal">
            <button className="ok" onClick={()=>props.onClick(1)}>Ok</button>
            <button className="cancel" onClick={props.cancel}>Cancel</button>
        </div>
        ,
        document.getElementById("portal")

    )
}
export default Portal
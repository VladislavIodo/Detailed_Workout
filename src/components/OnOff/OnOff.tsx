import React, {useState} from "react";

type OnOffPropsType = {
    // on: boolean
}

export function OnOff(props: OnOffPropsType) {

let [on, setOn] = useState(false)
    const onStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on? "green" : "white"
    }
    const offStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        height: "10px",
        width: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <button style={onStyle} onClick={()=>{setOn(true)}}>on</button>
            <button style={offStyle} onClick={()=>{setOn(false)}}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}
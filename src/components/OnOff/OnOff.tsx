 import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on? "green" : "white"
    }
    const offStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        height: "10px",
        width: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <button style={onStyle} onClick={()=>{props.onChange(true)}}>on</button>
            <button style={offStyle} onClick={()=>{props.onChange(false)}}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}
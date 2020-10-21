 import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn: boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {

let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)
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
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>on</button>
            <button style={offStyle} onClick={offClicked}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    )
}
import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(true);

    return (

        <div className="App">
            <UncontrolledOnOff onChange={setSwitchOn} defaultOn={false}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Rating value={ratingValue} onClick={setRatingValue} />
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<UncontrolledRating onChange={switchOn}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    return (
        <div className="App">
            <OnOff/>
            <Rating value={ratingValue} onClick={setRatingValue} />
            {/*<PageTitle title = {"this is App components"} />*/}
            {/*<PageTitle title={"My friend"}/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            <UncontrolledRating/>
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
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

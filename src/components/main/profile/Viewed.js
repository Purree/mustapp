import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import ViewedList from "./ViewedList";

const Viewed = () => {
    return (
        <ViewedList filmsIds={[1, 2, 3]} />
    );
}

export default Viewed;

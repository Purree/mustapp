import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import ViewedList from "../ViewedList";

const Viewed = () => {
    return (
        <ViewedList filmsIds={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} filmIsMarkEnable={true} />
    );
}

export default Viewed;

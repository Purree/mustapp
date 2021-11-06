import React from 'react';
import { Layout, Text } from "@ui-kitten/components";
import ViewedList from "../ViewedList";

const films = [
    {
        id: 1,
        filmMark: 10,
    },
    {
        id: 2,
        filmMark: 7
    },{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},
]


const Viewed = () => {
    return (
        <ViewedList films={films}/>
    );
}

export default Viewed;

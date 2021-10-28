import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import EmptyList from "./EmptyList";



const films = {
    1: {
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
    },
    2: {
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
    },
    3: {
        photoUrl: ''
    },
}

const FilmsContainer = (props) => {
    const filmsIds = props.filmsIds
    return (
        <Layout style={{flex: 1}}>
            {filmsIds.map((id) => {
                return (<Text key={id}>Film {id}</Text>)
            })}
        </Layout>
    )
}


const ViewedList = (props) => {
    const filmsIds = props.filmsIds

    const validateArray = (props) => {
        const ids = props.filmsIds
        return (typeof (ids) === 'object' && ids.length === 0)
    }


    return (
        <>
            {
                (validateArray(filmsIds)) ? (<EmptyList/>) : (<FilmsContainer filmsIds={filmsIds}/>)
            }
        </>
    );
}

export default ViewedList;

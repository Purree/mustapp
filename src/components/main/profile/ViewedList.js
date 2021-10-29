import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import EmptyList from "./EmptyList";
import config from '../../../../config.json'


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

    const validateLink = (link) => {
        return link ? link : config.unknownFilmUrl;
    }

    return (
        <Layout style={{flex: 1}}>
            {/*https://coderoad.ru/37455701/React-Native-%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-ScrollView-%D0%BD%D0%B5-%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D0%BA%D1%80%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F-%D0%BD%D0%B0-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B5-Android*/}
            <ScrollView contentContainerStyle={styles.imagesContainer}>
                    {filmsIds.map((id) => {
                        return (
                            <Image
                                style={styles.image}
                                source={{
                                    uri: validateLink(films[id]?.photoUrl)
                                }}
                                key={id}
                            />
                        )
                    })}
            </ScrollView>
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


const styles = StyleSheet.create({
    imagesContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'red'
    },
    image: {
        width: '48%',
        height: '48%',
        borderWidth: 1,
        marginBottom: 20
    }
})

export default ViewedList;

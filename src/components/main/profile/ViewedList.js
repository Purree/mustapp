import React from 'react';
import {Icon, Layout, Text} from "@ui-kitten/components";
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import EmptyList from "./EmptyList";
import config from '../../../../config.json'
import If from "../../If";


const films = {
    1: {
        mark: 10,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Kate_%28film%2C_2021%29.jpg/1200px-Kate_%28film%2C_2021%29.jpg'
    },
    2: {
        mark: 7,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%92%D0%BE%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2021%29.jpeg'
    },
    3: {
        mark: 1,
        photoUrl: ''
    },
}


const FilmsContainer = (props) => {
    const {width, height} = Dimensions.get('window');

    const filmsIds = props.filmsIds
    const filmIsMarkEnable = props?.filmIsMarkEnable

    const validateLink = (link) => {
        return link ? link : config.unknownFilmUrl;
    }

    return (
        <Layout style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.imagesContainer} nestedScrollEnabled={true}>
                {filmsIds.map((id) => {
                    return (
                        <View key={id}>
                            <If condition={filmIsMarkEnable}>
                                <View style={styles.mark}>
                                    <Icon
                                        style={styles.icon}
                                        fill='white'
                                        name='star'
                                    />
                                    <View style={{flexDirection: 'row', flexWrap: 'wrap',}}>
                                        <Text style={styles.markLabel}>
                                            {films[id]?.mark ?? '-'}
                                        </Text>
                                    </View>
                                </View>
                            </If>
                            <Image
                                style={[styles.image, {width: width * .40, height: height * .40}]}
                                source={{
                                    uri: validateLink(films[id]?.photoUrl)
                                }}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        </Layout>
    )
}

const ViewedList = (props) => {
    const filmsIds = props.filmsIds
    const filmIsMarkEnable = props?.filmIsMarkEnable

    const validateArray = (props) => {
        const ids = props.filmsIds
        return (typeof (ids) === 'object' && ids.length === 0)
    }


    return (
        <>
            {
                (validateArray(filmsIds)) ? (<EmptyList/>) : (
                    <FilmsContainer filmsIds={filmsIds} filmIsMarkEnable={filmIsMarkEnable}/>)
            }
        </>
    );
}


const styles = StyleSheet.create({
    imagesContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    image: {
        width: '48%',
        height: '48%',
        borderWidth: 1,
        marginBottom: 20
    },
    mark: {
        zIndex: 1,
        elevation: 1,
        position: "absolute",
        top: 5,
        right: 7.5,
        paddingRight: 10,
        paddingLeft: 5,
        width: "25%",
        backgroundColor: 'darkgray',
        borderRadius: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    markLabel: {
        color: 'white'
    },
    icon: {
        width: 10,
        height: 10
    }
})

export default ViewedList;

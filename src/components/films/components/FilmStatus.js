import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Text, useTheme} from "@ui-kitten/components";

const StarIcon = ({mark}) => (
    <Icon
        style={mark ? styles.icon : {display: 'none'}}
        fill='white'
        name='star'
    />
);

const FilmStatus = ({item}) => {
    const themeStyles = useTheme()
    const filmStatus = item.filmStatus ?? 1
    let filmLabel = ''

    switch (filmStatus) {
        case 2:
            filmLabel = 'Посмотрю'
            break
        case 3:
            filmLabel = item.filmMark ?? 'Посмотрел'
    }

    return (
        <View
            style={filmLabel ? [styles.filmStatus, {backgroundColor: themeStyles['text-hint-color']}] : {display: 'none'}}>
            <StarIcon mark={item.filmMark}/>
            <Text style={styles.filmStatusMark}>
                {filmLabel}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    filmStatus: {
        position: 'absolute',
        top: 2,
        right: 3,
        borderRadius: 5,
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    filmStatusMark: {
        color: 'white'
    },
    icon: {
        width: 18,
        height: 18,
    }
})

export default FilmStatus;

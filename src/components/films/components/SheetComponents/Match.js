import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Button, Text, useTheme } from '@ui-kitten/components';
import * as Progress from 'react-native-progress';
import { default as theme } from "../../../../style/custom-theme.json";
import DividerWithMargin from "../../../main/settings/components/DividerWithMargin";


const Match = ({bottomSheetModalRef, matchData}) => {
    const themeStyles = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.percent}>
                    <Text style={[styles.count, { color: theme[ 'color-primary-500' ] }]}>{matchData.percent*100}</Text>
                    <Text style={[styles.percentIcon, { color: theme[ 'color-primary-500' ] }]}>%</Text>
                </View>
                <View>
                    <Text style={styles.recommendationTitle}>Must Match</Text>
                    <Text style={[styles.recommendationText, { color: themeStyles[ 'text-hint-color' ] }]}>Основано на
                        оценках пользователей похожих на вас</Text>
                </View>
            </View>
            <Progress.Bar style={styles.progress} progress={matchData.percent} width={Dimensions.get( 'window' ).width - 30}
                          height={10}
                          color={theme[ 'color-primary-500' ]}/>
            <DividerWithMargin/>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreTitle}>IMDb</Text>
                <Text style={[styles.scoreDescription, { color: themeStyles[ 'text-hint-color' ] }]}>Средняя оценка всех
                    пользователей сервиса IMDb</Text>
                <Text style={[styles.score, {color: theme['color-primary-500']}]}>{matchData.userRating}</Text>
            </View>
            <Button onPress={()=>bottomSheetModalRef.current?.close()}>Закрыть</Button>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        justifyContent: 'space-between',
        height: '97%',
        width: "100%"
    },
    header: {
        "flexDirection": "row"
    },
    percent: {
        flexDirection: "row",
        marginRight: 10
    },
    count: {
        fontSize: 50
    },
    percentIcon: {
        fontSize: 30
    },
    recommendationText: {
        marginRight: 40,
        fontWeight: 'bold'
    },
    recommendationTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    progress: {
        marginTop: 10
    },
    scoreContainer: {
        alignItems: 'center'
    },
    scoreTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    scoreDescription: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    score: {
        fontSize: 30
    }
} )

export default Match;

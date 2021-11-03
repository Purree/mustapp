import React, {useState} from 'react';
import {Dimensions, View} from 'react-native'
import Chart from './Chart'
import {Text, useTheme} from "@ui-kitten/components";

const GraphStatistics = () => {

    const [width, setWidth] = useState(Dimensions.get("window").width - 60);

    return (
        <View style={styles().container} onLayout={(event) => {
            const {x, y, width, height} = event.nativeEvent.layout;
            setWidth(width);
        }}>
            <Text style={styles().mainText}>Статистика</Text>
            <Chart width={width} />
            <View style={styles().bottomStats}>
                <View style={styles().bottomStatsBlock}>
                    <Text style={styles().bottomStatsCount}>7</Text>
                    <Text style={styles().bottomStatsLabel}>Средний рейтинг</Text>
                </View>
                <View style={styles().bottomStatsBlock}>
                    <Text style={styles().bottomStatsCount}>1</Text>
                    <Text style={styles().bottomStatsLabel}>Оценено фильмов</Text>
                </View>
                <View style={styles().bottomStatsBlock}>
                    <Text style={styles().bottomStatsCount}>100%</Text>
                    <Text style={styles().bottomStatsLabel}>7 и более звёзд</Text>
                </View>
            </View>
        </View>
    );
}


const styles = () => {
    const themeStyles = useTheme();

    return {
        container: {
            marginTop: 20,
            marginBottom: 120
        },
        mainText: {
            color: themeStyles['text-hint-color']
        },
        bottomStats: {
            backgroundColor: themeStyles['background-basic-color-2'],
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            paddingVertical: 10
        },
        bottomStatsBlock: {
            width: "20%"
        },
        bottomStatsCount: {
            fontWeight: 'bold'
        },
        bottomStatsLabel: {
            fontWeight: 'bold',
            color: themeStyles['text-disabled-color'],
            fontSize: 12
        }
    }
}

export default GraphStatistics;

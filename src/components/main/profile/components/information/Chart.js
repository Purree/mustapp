import React from 'react';
import {
  LineChart
} from "react-native-chart-kit";
import {Dimensions, View} from "react-native";
import {useTheme} from "@ui-kitten/components";

const Chart = (props) => {
    const themeStyles = useTheme();
    const width = props.width;

    return (
        <View>
            {/*https://www.npmjs.com/package/react-native-chart-kit*/}
            <LineChart
                data={{
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    datasets: [
                        {
                            data: [
                                0,
                                Math.random()*100,
                                70,
                                Math.random()*100,
                                100,
                                100,
                                Math.random()*100,
                                70,
                                Math.random()*100,
                                0,
                            ]
                        }
                    ]
                }}
                width={width} // from react-native
                height={200}
                yAxisSuffix="%"
                chartConfig = {{
                    backgroundGradientFrom: themeStyles['background-basic-color-1'],
                    backgroundGradientTo: themeStyles['background-basic-color-1'],
                    color: () => themeStyles['background-alternative-color-4'],
                    strokeWidth: 2, // optional, default 3
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false // optional
                }}
                bezier
            />
        </View>
    );
}

export default Chart;

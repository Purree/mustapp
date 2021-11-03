import React from 'react';
import {useTheme} from "@ui-kitten/components";

const MainStyles = () => {
    const themeStyles = useTheme()

    return {
        BlockName: {
            fontSize: 14,
            color: themeStyles['text-hint-color'],
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 25
        }
    };
}

export default MainStyles;

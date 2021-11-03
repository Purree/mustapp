import React from 'react';
import {View} from 'react-native';
import {Text, Toggle, useTheme} from "@ui-kitten/components";
import DividerWithMargin from "./components/DividerWithMargin";
import MainStyles from "./components/MainStyles";

const Confidentiality = () => {
    const themeStyles = useTheme()

    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    return (
        <View>
            <Text style={MainStyles().BlockName}>Конфиденциальность</Text>
            <DividerWithMargin/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Скрытый профиль</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14, color: themeStyles['text-hint-color']}}>Свой профиль видите только вы.</Text>
                </View>
                <Toggle checked={checked} onChange={onCheckedChange}/>
            </View>
        </View>
    );
}

export default Confidentiality;

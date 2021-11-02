import React from 'react';
import {View} from 'react-native';
import {Divider, Text, Toggle, useTheme} from "@ui-kitten/components";

const Confidentiality = () => {
    const themeStyles = useTheme()

    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    return (
        <View>
            <Text style={{
                fontSize: 14,
                color: themeStyles['text-hint-color'],
                fontWeight: 'bold'
            }}>Конфиденциальность</Text>
            <Divider style={{marginVertical: 10}} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Скрытый профиль</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14, color: themeStyles['text-hint-color']}}>Свой профиль видите только вы.</Text>
                </View>
                <Toggle checked={checked} onChange={onCheckedChange}/>
            </View>
            <Divider style={{marginVertical: 10}} />
        </View>
    );
}

export default Confidentiality;

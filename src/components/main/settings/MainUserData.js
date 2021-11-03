import React from 'react';
import {Input, Radio, RadioGroup, Text, useTheme} from '@ui-kitten/components';
import {Pressable, View} from 'react-native';
import PhoneModal from "./components/PhoneModal";

const MainUserData = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedSex, setSelectedSex] = React.useState(0);

    return (
        <>
            <PhoneModal navigation={navigation} visible={visible} setVisible={setVisible}/>
            <View>
                <Input style={styles().input}
                    label='Имя'
                    placeholder='Введите имя'
                    onChangeText={nextValue => console.log(nextValue)}
                />
                <Input style={styles().input}
                    label='Никнейм'
                    placeholder='Введите никнейм'
                    onChangeText={nextValue => console.log(nextValue)}
                />
                <View style={styles().input}>
                    <Text style={styles().phoneNumberLabel}>Номер телефона</Text>
                    <Pressable onPress={() => setVisible(true)} style={styles().phoneNumberContainer}>
                        <Text style={styles().phoneNumberText}>+79999999999</Text>
                    </Pressable>
                </View>
                <View style={styles().input}>
                    <RadioGroup
                        style={styles().sexContainer}
                        selectedIndex={selectedSex}
                        onChange={index => setSelectedSex(index)}>
                        <Radio>Мужской</Radio>
                        <Radio>Женский</Radio>
                    </RadioGroup>
                </View>
            </View>
        </>
    );
}

const styles = () => {
    const themeStyle = useTheme()

    return {
        input: {
            marginTop: 10
        },
        phoneNumberLabel: {
            color: themeStyle['text-hint-color']
        },
        phoneNumberContainer: {
            backgroundColor: themeStyle['background-basic-color-3'],
            paddingVertical: 9,
            borderRadius: 5,
            borderColor: themeStyle['border-basic-color-5'],
            borderWidth: 1,
            paddingLeft: 20
        },
        phoneNumberText: {
            color: themeStyle['text-hint-color'],
            backgroundColor: themeStyle['background-basic-color-1'],
            width: "40%",
            paddingLeft: 5,
            borderRadius: 50
        },
        sexContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        }
    }
}

export default MainUserData;

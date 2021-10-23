import React, {useState, useRef} from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {Colors as styles} from "react-native/Libraries/NewAppScreen";
import {Button, Text} from "@ui-kitten/components";

const NumberInput = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.container}>
                <SafeAreaView style={{ alignItems: 'center' }}>
                    {showMessage && (
                        <View>
                            {
                                !valid ?
                                    <Text style={{color: '#FF0000'}}>Вы ввели некорректный номер</Text> :
                                    <Text>Пожалуйста, подождите</Text>
                            }
                        </View>
                    )}
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={'9999999999'}
                        defaultCode="RU"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme={true}
                    />
                    <Button
                        style={{marginTop: 10, width: '100%'}}
                        onPress={() => {
                            const checkValid = phoneInput.current?.isValidNumber(value);
                            setShowMessage(true);
                            setValid(checkValid ? checkValid : false);
                        }}
                    >
                        ПОДТВЕРДИТЬ НОМЕР ТЕЛЕФОНА
                    </Button>
                </SafeAreaView>
            </View>
        </>
    );
};


// TODO: Make sms auth page
export default NumberInput;
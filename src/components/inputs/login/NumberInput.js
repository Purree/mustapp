import React, {useState, useRef, useContext} from "react";
import {
    SafeAreaView,
    View,
    StatusBar,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {Colors as styles} from "react-native/Libraries/NewAppScreen";
import {Button, Icon, Text, useTheme} from "@ui-kitten/components";
import {numberValidator} from "../../../hook/useStateWithValidation";
import {ThemeContext} from "../../../context/theme-context";
import {AuthContext} from "../../../context/auth-context";
import { LogBox  } from 'react-native';


const DropdownIcon = (props) => (
    <Icon style={{width:'18px', height:'18px'}} fill={props.color} name='arrow-ios-downward-outline' {...props} />
);

const NumberInput = ({navigation, onSuccessfulVerification}) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    const {theme} = useContext(ThemeContext);
    const themeStyles = useTheme();

    const navigateToConfirm = (phoneNumber) => {
        navigation.navigate('NumberConfirmation', {phoneNumber, onSuccessfulVerification});
    };

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.container}>
                <SafeAreaView style={{alignItems: 'center'}}>
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
                        defaultCode="RU"
                        layout="first"
                        containerStyle={{backgroundColor: themeStyles['background-basic-color-3'], width: '100%'}}
                        textContainerStyle={{backgroundColor: themeStyles['background-basic-color-2']}}
                        textInputStyle={{color: themeStyles['text-basic-color']}}
                        codeTextStyle={{color: themeStyles['text-basic-color']}}
                        textInputProps={{autoComplete: 'tel'}}
                        placeholder='Ваш номер телефона'
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme = {theme === 'dark'}
                        renderDropdownImage = {<DropdownIcon color={themeStyles['text-basic-color']} />}
                    />



                    <Button
                        style={{marginTop: 10, width: '100%'}}
                        onPress={() => {
                            const checkValid = phoneInput.current?.isValidNumber(value) && numberValidator(value);
                            if (checkValid) {
                                navigateToConfirm(formattedValue);
                                return ''
                            }

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


export default NumberInput;
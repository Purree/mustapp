import React, {useState, useEffect} from 'react';
import {Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from "react-native";
import {default as theme} from '../../style/custom-theme.json';
import SMSCodeConformingField from "../inputs/SmsCodeConfirmingField";

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
);

const ConfirmNumber = ({route, navigation}) => {
    const {phoneNumber} = route.params

    const maxSmsTimerSeconds = 20;
    const [smsTimerSeconds, setSmsTimerSeconds] = useState(maxSmsTimerSeconds);
    const [smsSent, setSmsSent] = useState(true)
    const [error, setError] = useState('');

    useEffect(() => {
        if (smsTimerSeconds > 0) {
            setTimeout(() => {
                setSmsTimerSeconds(smsTimerSeconds - 1)
            }, 1000)
        } else {
            setSmsSent(false)
        }
    })

    function formatTime(time) {
        let minutes = ~~((time % 3600) / 60);
        let seconds = ~~time % 60;

        return "" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    const sendSms = () => {
        setSmsTimerSeconds(maxSmsTimerSeconds)
        setSmsSent(true)
        alert('Тут должна быть логика для отправки смс')
    }

    const onSMSCodeSubmit = (value) => {
        if (value === '666666') {
            alert('Код верный')
        } else {
            setError('Код неверный')
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title='Подтвердить номер телефона' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={styles.container}>
                <Text>Введите 6-значный код, отправленный на номер</Text>
                <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                <SMSCodeConformingField onSubmit={onSMSCodeSubmit} />
                <Text style={styles.codeError}>{error ? error : ''}</Text>
                {
                    smsSent?
                        <Text style={styles.warningText}>Отправить код ещё раз можно будет через {formatTime(smsTimerSeconds)}</Text>:
                        <Button style={styles.warningText} status='basic' appearance='ghost' onPress={sendSms}>Отправить код повторно</Button>
                }
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10
        },
        warningText: {
            marginTop: 30
        },
        phoneNumber: {
            color: theme["color-primary-600"]
        },
        codeError: {
            textAlign: 'center',
            color: '#FF0000'
        }
    }
);

export default ConfirmNumber;

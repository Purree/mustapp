import React from 'react';
import {View, StyleSheet} from 'react-native';
import {default as theme} from '../style/custom-theme.json';
import * as eva from '@eva-design/eva';
import {FacebookLoginButton} from "./buttons/login/Facebook";
import {TwitterLoginButton} from "./buttons/login/Twitter";
import {NumberLoginButton} from "./buttons/login/Number";
import {Image} from 'react-native';
import {Text, Button} from "@ui-kitten/components";

const LoginForm = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logoBlock}>
                    <Image style={styles.logo} source={require('../pictures/logo.png')}/>
                    <Text style={styles.logoText} category='h1'>Must</Text>
                    <Text style={styles.logoText} category='s1'>Социальная сеть для киноманов</Text>
                </View>
                <View style={styles.buttonsBlock}>
                    <FacebookLoginButton/>
                    <TwitterLoginButton/>
                    <NumberLoginButton/>
                    <View>
                        <Text>Регистрируясь, вы принимаете</Text>
                        <Button appearance='ghost' size='medium' status='basic' onPress={()=>{alert('Правил использования у меня нет')}}>Правила использования</Button>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsBlock: {
        justifyContent: 'space-around',
        flex: 1
    },
    button: {
        marginBottom: '10px'
    },
    logo: {
        maxWidth: 85,
        maxHeight: 85,
        flex: 1,
        justifyContent: "center"
    },
    logoBlock: {
        width: '100%',
        backgroundColor: theme["color-primary-500"],
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logoText: {
        color: '#ffffff',
        textAlign: 'center'
    },
});

export default LoginForm;

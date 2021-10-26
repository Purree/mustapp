import React from 'react';
import {View, StyleSheet, SafeAreaView } from 'react-native';
import {default as theme} from '../../style/custom-theme.json';
import {FacebookLoginButton} from "../buttons/login/Facebook";
import {TwitterLoginButton} from "../buttons/login/Twitter";
import {NumberLoginButton} from "../buttons/login/Number";
import {Image} from 'react-native';
import {Layout, Text, Button} from "@ui-kitten/components";
import ChangeTheme from "../buttons/ChangeTheme";
import config from '../../../config.json';

const LoginPage = ({ navigation }) => {
    return (
        <>
            <SafeAreaView  style={styles.container}>
                <Layout style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.logoBlock}>
                        <Image style={styles.logo} source={require('../../pictures/logo.png')}/>
                        <Text style={styles.logoText} category='h1'>{config.title}</Text>
                        <Text style={styles.logoText} category='s1'>{config.tagline}</Text>
                    </View>
                    <View style={styles.buttonsBlock}>
                        <FacebookLoginButton/>
                        <TwitterLoginButton/>
                        <NumberLoginButton navigation={navigation}/>
                        <ChangeTheme/>

                        <View>
                            <Text>Регистрируясь, вы принимаете</Text>
                            <Button appearance='ghost' size='medium' status='basic' onPress={()=>{alert('Правил использования у меня нет')}}>Правила использования</Button>
                        </View>
                    </View>
                </Layout>
            </SafeAreaView>
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

export default LoginPage;
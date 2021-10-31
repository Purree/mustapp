import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Layout, Text} from "@ui-kitten/components";
import Header from "../../Header";
import UserPhoto from "../settings/UserPhoto";

const Settings = ({navigation}) => {
    return (
        <>
            <Header navigation={navigation} title={'Настройки'}/>
            <Divider/>
            <Layout style={styles.container}>
                <UserPhoto />
                <Text>Hello!</Text>
            </Layout>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 25
    }
})

export default Settings;

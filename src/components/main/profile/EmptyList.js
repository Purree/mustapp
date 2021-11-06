import React from 'react';
import {Button, Layout, Text} from "@ui-kitten/components";
import {StyleSheet} from "react-native";

const EmptyList = () => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.caption}>Список пуст</Text>
            <Text style={styles.text}>Импортируйте вашу библиотеку из</Text>
            <Text style={styles.text}>IMDb, Letterboxd, Кинопоиска или</Text>
            <Text style={styles.text}>добавьте несколько фильмов и</Text>
            <Text style={styles.text}>сериалов вручную</Text>
            <Button style={styles.importButton} status='basic' appearance='outline' onPress={()=>alert('Тут документация, как импортировать библиотеку')}>Импортировать</Button>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%'
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    text: {
        fontWeight: 'bold',
        color: 'darkgray'
    },
    importButton: {
        marginTop: 20
    }
})

export default EmptyList;



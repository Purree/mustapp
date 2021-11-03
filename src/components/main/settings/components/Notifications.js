import React from 'react';
import {View} from 'react-native';
import {Divider, Layout, Text, Toggle, useTheme} from "@ui-kitten/components";
import Header from "../../../Header";
import MainStyles from "./MainStyles";

const ToggleButton = () => {
    const [activeChecked, setActiveChecked] = React.useState(false);

    const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
    };

    return (
        <Toggle
            checked={activeChecked}
            onChange={onActiveCheckedChange}/>
    )
}

const TogglesBlock = ({name, style}) => {
    return (
        <View style={style ?? styles().block}>
            <Text style={styles().mainText}>{name}</Text>
            <ToggleButton/>
        </View>
    )
}

const Notifications = ({navigation}) => {
    return (
        <>
            <Header title='Уведомления' navigation={navigation}/>
            <Divider/>
            <Layout style={MainStyles().container}>
                <View style={styles().block}>
                    <View>
                        <Text style={styles().mainText}>Умные уведомления</Text>
                        <Text style={styles().additionalText}>Только полезные и важные уведомления</Text>
                    </View>
                    <ToggleButton/>
                </View>
                <Divider style={{marginBottom: 10}}/>
                <View>
                    <Text style={MainStyles().BlockName}>Действия</Text>
                    <Divider style={{marginTop: 10}}/>
                    <TogglesBlock name={'Друг посмотрел фильм'} />
                    <TogglesBlock name={'Друг хочет посмотреть фильм'} />
                </View>
                <Divider style={{marginBottom: 10}}/>
                <View>
                    <TogglesBlock name={'Активности'} />
                    <TogglesBlock name={'Новый друг зарегистрировался \nв приложении'} />
                    <TogglesBlock name={'Подписки'} />
                    <TogglesBlock name={'Упоминания'} />
                    <TogglesBlock name={'Новые комментарии'} />
                    <TogglesBlock name={'Отметки "Нравится"'} />
                </View>
                <Divider style={{marginBottom: 10}}/>
                <View>
                    <Text style={MainStyles().BlockName}>События</Text>
                    <Divider style={{marginTop: 10}}/>
                    <TogglesBlock name={'Выход фильмов'} />
                    <TogglesBlock name={'Новые серии'} />
                </View>
            </Layout>
        </>
    );
}

const styles = () => {
    const themeStyles = useTheme()

    return {
        block: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 50,
            alignItems: 'center',
        },
        mainText: {
            fontWeight: 'bold'
        },
        additionalText: {
            fontWeight: 'bold',
            fontSize: 12,
            color: themeStyles['text-hint-color']
        }
    }
}

export default Notifications;

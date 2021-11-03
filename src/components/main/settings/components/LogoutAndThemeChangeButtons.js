import React from 'react';
import {View} from 'react-native';
import {Button} from "@ui-kitten/components";
import {ThemeContext} from "../../../../context/theme-context";
import {AuthContext} from "../../../../context/auth-context";

const LogoutAndThemeChangeButtons = () => {
    const themeContext = React.useContext(ThemeContext);
    const authContext = React.useContext(AuthContext);

    return (
        <View>
            <Button appearance='ghost' style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>Сменить тему</Button>
            <Button appearance='ghost' status='danger' style={{ marginVertical: 4 }} onPress={() => authContext.setToken('')}>Выход</Button>
        </View>
    );
}

export default LogoutAndThemeChangeButtons;

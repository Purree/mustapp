import React from 'react';
import {Button} from "@ui-kitten/components";
import {ThemeContext} from "../../context/theme-context";

const ChangeTheme = () => {
    const themeContext = React.useContext(ThemeContext);

    return (
        <Button appearance='outline' status='basic' style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>Сменить тему</Button>
    );
}

export default ChangeTheme;

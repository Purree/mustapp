import React, {useContext} from 'react';
import CountryPicker, {DARK_THEME, DEFAULT_THEME} from 'react-native-country-picker-modal';
import {View} from 'react-native';
import {ThemeContext} from "../../../../context/theme-context";

// https://github.com/xcarpentier/react-native-country-picker-modal
const CountryPickerBlock = ({onCountrySelect}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <View>
            <CountryPicker
                theme={theme === 'dark' ? DARK_THEME : DEFAULT_THEME}
                withEmoji
                translation='rus'
                placeholder='Страна и язык'
                withAlphaFilter={true}
                withFilter={true}
                onSelect={(el)=>onCountrySelect(el)}
            />
        </View>
    );
}

export default CountryPickerBlock;

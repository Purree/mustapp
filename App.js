import React, {useState} from 'react';
import {
    ApplicationProvider,
    IconRegistry
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ThemeContext} from './src/context/theme-context';

import {Home} from "./src/components/Home";
import {LoginNavigator} from "./src/navigation/LoginNavigator";

function renderPage() {
    const [isSignedIn, setSignedIn] = useState(false);
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ApplicationProvider {...eva} theme={eva[theme]}>
                <IconRegistry icons={EvaIconsPack}/>
                {isSignedIn ? (
                    <Home/>
                ) : (
                    <LoginNavigator/>
                )}
            </ApplicationProvider>
        </ThemeContext.Provider>
    )
}

export default renderPage;

// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { AppNavigator } from './src/components/AppNavigator';
//
// export default () => (
//     <>
//         <IconRegistry icons={EvaIconsPack}/>
//         <ApplicationProvider {...eva} theme={eva.light}>
//             <AppNavigator/>
//         </ApplicationProvider>
//     </>
// );

import React, {useState} from 'react';
import {
    ApplicationProvider,
    IconRegistry
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import LoginForm from "./src/components/LoginForm";
import {Home} from "./src/components/Home";

function renderPage() {
    const [isSignedIn, setSignedIn] = useState(false);

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <IconRegistry icons={EvaIconsPack} />
                {isSignedIn ? (
                    <Home/>
                ) : (
                    <LoginForm/>
                )}
        </ApplicationProvider>
    )
}

export default renderPage;

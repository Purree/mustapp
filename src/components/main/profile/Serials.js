import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import EmptyList from "./EmptyList";

const Serials = () => {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <EmptyList/>
        </Layout>
    );
}

export default Serials;

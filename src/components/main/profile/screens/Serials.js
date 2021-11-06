import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import ViewedList from "../ViewedList";

const Serials = () => {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ViewedList films={[]}/>
        </Layout>
    );
}

export default Serials;

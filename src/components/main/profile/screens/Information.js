import React from 'react';
import {Layout} from "@ui-kitten/components";
import StatisticBlocks from "../components/information/StatisticBlocks";
import FavoriteActors from "../components/information/FavoriteActors";
import FavoriteDirectors from "../components/information/FavoriteDirectors";
import GraphStatistics from "../components/information/GraphStatistics";
import {ScrollView} from 'react-native'

const Information = ({navigation}) => {
    return (
        <Layout style={{flex: 1}}>
            <ScrollView>
                <StatisticBlocks navigation={navigation}/>
                <FavoriteActors/>
                <FavoriteDirectors/>
                <GraphStatistics/>
            </ScrollView>
        </Layout>
    );
}

export default Information;

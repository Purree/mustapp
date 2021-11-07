import React from 'react';
import { Layout } from "@ui-kitten/components";
import StatisticBlocks from "../components/information/StatisticBlocks";
import Persons from "../components/information/Persons";
import GraphStatistics from "../components/information/GraphStatistics";
import { ScrollView } from 'react-native'

const peoples = [
    {
        id: 1,
        name: 'Николай Флитов',
        description: '1/100%',
        photoUrl: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'
    }, {
        id: 2,
        name: 'Николай Флитов',
        description: '1/100%',
        photoUrl: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'
    }, {
        id: 3,
        name: 'Николай Флитов',
        description: '1/100%',
        photoUrl: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'
    }, {
        id: 4,
        name: 'Николай Флитов',
        description: '1/100%',
        photoUrl: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'
    }, {
        id: 5,
        name: 'Николай Флитов',
        description: '1/100%',
        photoUrl: 'https://sun1-56.userapi.com/s/v1/ig2/NmJozsGBrgIvXu8Splqf__gVkI6JCBQV23TQBeHiV_wJIXENk6XBEuXlGqlQPQG1YyzoH3U_P_3HDUiRhEzgrbov.jpg?size=50x50&quality=95&crop=1283,196,855,855&ava=1'
    },
]

const stats = [
    {
        title: 'Подписки',
        count: 1,
        screenToNavigate: 'Subscribes',
        navigationParams: {
            title: 'Подписки',
            type: 1
        }
    }, {
        title: 'Подписчики',
        count: 1,
        screenToNavigate: 'Subscribes',
        navigationParams: {
            title: 'Подписчики',
            type: 2
        }
    }, {
        title: 'Часов просмотра фильмов',
        count: 1.9
    }, {
        title: 'Часов просмотра сериалов',
        count: 0
    }
]

const Information = ( { navigation } ) => {
    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView>
                <StatisticBlocks statistics={stats} navigation={navigation}/>
                <Persons peoples={peoples} title='Любимые актёры'/>
                <Persons peoples={peoples} title='Любимые режисёры'/>
                <GraphStatistics/>
            </ScrollView>
        </Layout>
    );
}

export default Information;

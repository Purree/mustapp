import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Divider, Icon, Input, Layout} from "@ui-kitten/components";
import MediumFilmsPreview from "../../films/components/MediumFilmsPreview";
import If from "../../If";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchType, setSearchType] = useState(1) // 1 - фильм, 2 - сериал

    const SearchIcon = (props) => {
        return <Icon {...props} name='search-outline'/>
    }

    return (
        <Layout style={styles.container}>
            <Input
                style={styles.marginRight}
                placeholder='Поиск'
                value={searchQuery}
                onChangeText={query => setSearchQuery(query)}
                accessoryLeft={SearchIcon}
            />
            <If condition={!searchQuery}>
                <MediumFilmsPreview title='Рекомендации'/>
            </If>
            <If condition={searchQuery}>
                <View style={styles.marginRight}>
                    <View style={styles.buttons}>
                        <Button style={styles.button} appearance='outline' disabled={searchType === 1} onPress={() => setSearchType(1)}>Фильмы</Button>
                        <Button style={styles.button} appearance='outline' disabled={searchType === 2} onPress={() => setSearchType(2)}>Сериалы</Button>
                    </View>
                </View>
                <MediumFilmsPreview/>
            </If>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 120
    },
    collectionsContainer: {
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 120
    },
    marginRight: {
        marginRight: 15
    },
    buttons: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        width: '45%'
    }
})

export default Search;

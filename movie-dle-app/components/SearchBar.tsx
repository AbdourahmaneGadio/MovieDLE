import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable, FlatList } from "react-native";

export default function SearchBar() {

    let fakeMovies = [{
        id: 1,
        title: 'My favorite fake movie'
    }, {
        id: 2,
        title: 'My least favorite fake movie'
    },]


    const [text, onChangeText] = useState('');

    const searchAvailableMovies = (text: string) => {
        // if(text){  
        //     const newData = fakeMovies.filter(item => {
        //      item.title.includes(text)
        //     })
        //     setMoviesSearchCompatibles(newData);
        // } else {
        //     setFilteredData(data);
        // }
        onChangeText(text)
    }

    return (
        <View style={stylesSearchBar.container}>
            <View style={stylesSearchBar.searchBarContainer}>
                <TextInput
                    style={stylesSearchBar.textInput}
                    onChangeText={searchAvailableMovies}
                    placeholder="Type to search a movie"
                    value={text}
                    testID="searchBarTextInput" />
                <Pressable style={stylesSearchBar.okButtonContainer}>
                    <Text     testID="searchBarOkButton" >OK</Text>
                </Pressable>
            </View>
            {fakeMovies.length > 0 && <FlatList
                data={fakeMovies}
                renderItem={({ item }) =>
                    <Pressable>
                        <Text>{item.title}</Text>
                    </Pressable>
                }
            />}

        </View>
    );
}

const stylesSearchBar = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 5,
        marginVertical:50
    },
    searchBarContainer: {
        flexDirection: "row"
    },
    textInput: {
        borderColor: 'pink',
        borderWidth: 5,
        height: 40,
    },
    okButtonContainer: {
        borderColor: 'darkblue',
        borderWidth: 5,
        backgroundColor: 'yellow',
        justifyContent:"center"
    }
});
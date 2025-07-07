import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable, FlatList } from "react-native";
import { Image } from 'expo-image';

export default function MovieStore() {

    let fakeResultMovies = [{
        id: 1,
        "Title": 'My favorite fake movie',
        "Runtime": "120 min",
        "Director": "Me",
        "imdbRating": "10",
        "Genre": "Crime, Drama, Thriller",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
        "Year": "2019"
    }, {
        id: 2,
        "Title": 'My least favorite fake movie',
        "Runtime": "90 min",
        "Director": "Not Me",
        "imdbRating": "0",
        "Genre": "Action, Adventure",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
        "Year": "2024"
    },]

    return (
        <View style={stylesMovieStore.container}>
            <View style={stylesMovieStore.columnsContainer}>
                <View style={stylesMovieStore.textContainer}>
                    <Text style={stylesMovieStore.textItem}>Image</Text>
                </View>        <View style={stylesMovieStore.textContainer}>
                    <Text style={stylesMovieStore.textItem}>Title</Text>
                </View>        <View style={stylesMovieStore.textContainer}>
                    <Text style={stylesMovieStore.textItem}>Genre(s)</Text>
                </View>        <View style={stylesMovieStore.textContainer}>
                    <Text style={stylesMovieStore.textItem}>Release year</Text>
                </View>        <View style={stylesMovieStore.textContainer}>
                    <Text style={stylesMovieStore.textItem}>Director</Text>
                </View>
            </View>

            <FlatList
                data={fakeResultMovies}
                renderItem={({ item }) =>
                    <View style={stylesMovieStore.movieItem}>
                        <View
                            style={stylesMovieStore.imageContainer}>
                            <Image
                                style={stylesMovieStore.image}
                                source={item.Poster}
                                contentFit="cover"
                                transition={1000}
                            /></View>
                        <View style={stylesMovieStore.textContainer}>
                            <Text style={stylesMovieStore.textItem}>{item.Title}</Text>
                        </View>
                        <View style={stylesMovieStore.textContainer}>
                            <Text style={stylesMovieStore.textItem}>{item.Genre}</Text>
                        </View>
                        <View style={stylesMovieStore.textContainer}>
                            <Text style={stylesMovieStore.textItem}>{item.Year}</Text>
                        </View>
                        <View style={stylesMovieStore.textContainer}>
                            <Text style={stylesMovieStore.textItem}>{item.Director}</Text>
                        </View>
                    </View>
                }
            />

        </View>
    );
}

const stylesMovieStore = StyleSheet.create({
    container: {
        borderColor: 'darkblue',
        borderWidth: 5,
        marginTop: 50,
        width: '90%'
    },
    columnsContainer: {
        borderColor: 'red',
        borderWidth: 5,
        marginVertical: 15,
        width: '100%',
        flexDirection: "row",
        alignItems: "center"
    },
    movieItem: {
        borderColor: 'yellow',
        borderWidth: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: 100,
        height: 150
    },
    imageContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: '100%',
        marginHorizontal: "auto"
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#0553',
    },
    textContainer: {
        width: '20%', // 100 divide by number of columns
        height: '100%',
        alignItems: "center",
        justifyContent:"center"
    },
    textItem: {
        textAlign: "center",
    },
});
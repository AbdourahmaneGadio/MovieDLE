import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable, FlatList } from "react-native";
import movieDatabase from '@/database/movies.json'
import { Movie } from "@/app/types/types";

interface SearchBarProps {
    onPress: (movie: Movie) => void;
}

export default function SearchBar({ onPress }: SearchBarProps) {

    const [text, onChangeText] = useState('');

    const [moviesAvailable, setMoviesAvailable] = useState<Movie[]>(movieDatabase);
    const [moviesSearchCompatibles, setMoviesSearchCompatibles] = useState<Movie[]>([]);

    const searchAvailableMovies = (text: string) => {
        if (text) {
            const filteredMovies = moviesAvailable.filter(movie =>
                movie.Title.toLowerCase().includes(text)
            );
            setMoviesSearchCompatibles(filteredMovies);
        }
        else {
            setMoviesSearchCompatibles([]);
        }
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
                    <Text testID="searchBarOkButton" >OK</Text>
                </Pressable>
            </View>
            {moviesSearchCompatibles.length > 0 && 
            <FlatList
                data={moviesSearchCompatibles}
                renderItem={({ item }) =>
                    <Pressable onPress={() => {
                        setMoviesAvailable(moviesAvailable => moviesAvailable.filter(movie => movie.id !== item.id))
                        onPress(item)
                    }}>
                        <Text>{item.Title}</Text>
                    </Pressable>
                }
            />
            }

            {
            moviesAvailable.length == 0 && 
            <Text testID="noMoviesAvailableText">No movies available...</Text>
            }

        </View>
    );
}

const stylesSearchBar = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 5,
        marginVertical: 50
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
        justifyContent: "center"
    }
});
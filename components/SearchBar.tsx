import { Movie } from '@/app/types/types';
import movieDatabase from '@/database/movies.json';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface SearchBarProps {
  refreshMovieFoundList: (movie: Movie) => void;
}

export default function SearchBar({ refreshMovieFoundList }: SearchBarProps) {
  const [text, onChangeText] = useState('');

  const [moviesAvailable, setMoviesAvailable] = useState<Movie[]>(movieDatabase);
  const [moviesSearchCompatibles, setMoviesSearchCompatibles] = useState<Movie[]>([]);

  const searchAvailableMovies = (text: string) => {
    if (text) {
      const filteredMovies = moviesAvailable.filter(movie =>
        movie.Title.toLowerCase().includes(text)
      );
      setMoviesSearchCompatibles(filteredMovies);
      console.log(filteredMovies);
    } else {
      setMoviesSearchCompatibles([]);
    }
    onChangeText(text);
  };

  const handleMovieSelected = (item: Movie) => {
    console.log(
      `Number of movies available before the execution of the code : ${moviesAvailable.length}`
    );
    setMoviesAvailable(moviesAvailable => moviesAvailable.filter(movie => movie.id !== item.id));
    console.log(
      `Number of movies available after the execution of the code : ${moviesAvailable.length}`
    );

    console.log(`We remove all movies from the search bar`);
    setMoviesSearchCompatibles([]);

    console.log(`We clean the text from the search bar`);
    onChangeText('');

    refreshMovieFoundList(item);
  };

  return (
    <View style={stylesSearchBar.container}>
      <View style={stylesSearchBar.searchBarContainer}>
        <TextInput
          style={stylesSearchBar.textInput}
          onChangeText={searchAvailableMovies}
          placeholder="Type to search a movie"
          value={text}
          testID="searchBarTextInput"
        />
        <Pressable
          style={stylesSearchBar.okButtonContainer}
          onPress={() => {
            if (moviesSearchCompatibles.length > 0) {
              const item = moviesSearchCompatibles[0];
              handleMovieSelected(item);
            }
          }}>
          <Text testID="searchBarOkButton">OK</Text>
        </Pressable>
      </View>

      <FlatList
        data={moviesSearchCompatibles}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              handleMovieSelected(item);
            }}>
            <Text>{item.Title}</Text>
          </Pressable>
        )}
      />

      {text && moviesSearchCompatibles.length === 0 && (
        <Text testID="noMoviesAvailableText">No movies available...</Text>
      )}
    </View>
  );
}

const stylesSearchBar = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 5,
    marginVertical: 50,
  },
  searchBarContainer: {
    flexDirection: 'row',
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
    justifyContent: 'center',
  },
});

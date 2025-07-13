import { Movie } from '@/app/types/types';
import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

interface SearchBarProps {
  refreshMovieFoundList: (movie: Movie) => void;
  movieDatabase: Movie[];
}

export default function SearchBar({ refreshMovieFoundList, movieDatabase }: SearchBarProps) {
  const [text, onChangeText] = useState('');

  const [moviesAvailable, setMoviesAvailable] = useState<Movie[]>(movieDatabase);
  const [moviesSearchCompatibles, setMoviesSearchCompatibles] = useState<Movie[]>([]);

  const searchAvailableMovies = (text: string) => {
    if (text) {
      const filteredMovies = moviesAvailable.filter(movie =>
        movie.Title.toLowerCase().includes(text)
      );
      setMoviesSearchCompatibles(filteredMovies);
    } else {
      setMoviesSearchCompatibles([]);
    }
    onChangeText(text);
  };

  const handleMovieSelected = (item: Movie) => {
    console.debug(
      `Number of movies available before the execution of the code : ${moviesAvailable.length}`
    );
    setMoviesAvailable(moviesAvailable => moviesAvailable.filter(movie => movie.id !== item.id));
    console.debug(
      `Number of movies available after the execution of the code : ${moviesAvailable.length}`
    );

    console.debug(`We remove all movies from the search bar`);
    setMoviesSearchCompatibles([]);

    console.debug(`We clean the text from the search bar`);
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
      <ScrollView style={stylesSearchBar.scrollView}>
        <FlatList
          data={moviesSearchCompatibles}
          renderItem={({ item }) => (
            <Pressable
              style={{
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderColor: 'yellow',
                borderWidth: 5,
                backgroundColor: 'white',
              }}
              onPress={() => {
                handleMovieSelected(item);
              }}>
              <View style={stylesSearchBar.imageContainer} testID="movieListItemImage">
                <Image
                  style={stylesSearchBar.image}
                  source={item.Poster}
                  contentFit="cover"
                  transition={200}
                  contentPosition={'bottom center'}
                />
              </View>
              <View style={{ width: '60%', alignItems: 'center' }}>
                <Text>{item.Title}</Text>
              </View>
            </Pressable>
          )}
        />
      </ScrollView>
     
      {/* {text && moviesSearchCompatibles.length === 0 && (
        <Text testID="noMoviesAvailableText">No movies available...</Text>
      )} */}
    </View>
  );
}

const stylesSearchBar = StyleSheet.create({
  container: {
    width: '80%',
    maxWidth: 500,
    maxHeight: 250,
  },
  searchBarContainer: {
    flexDirection: 'row',
    borderColor: 'darkblue',
    borderWidth: 3,
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    textAlign: 'center',
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
  },
  okButtonContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  scrollView: { maxHeight: '100%' },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    maxWidth: 200,
    height: '100%',
    maxHeight: 600,
    marginHorizontal: 'auto',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
  },
});

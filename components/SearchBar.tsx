import { MovieSearch } from '@/app/types/types';
import {
  apiReadToken,
  imagesUrlBase,
  urlFetchBaseUrl,
} from '@/app/var/EnvVar';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface SearchBarProps {
  refreshMovieFoundList: (
    movieSearch: MovieSearch
  ) => void;
}

export default function SearchBar({
  refreshMovieFoundList,
}: SearchBarProps) {
  const [text, onChangeText] = useState('');
  const [isLoading, setIsLoading] =
    useState(false);

  const [
    moviesSearchCompatibles,
    setMoviesSearchCompatibles,
  ] = useState<MovieSearch[]>([]);

  const [
    moviesAlreadyChosen,
    setMoviesAlreadyChosen,
  ] = useState<MovieSearch[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData(text);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [text]);

  const searchAvailableMovies = (
    text: string
  ) => {
    if (text) {
      // We use the useEffect with a timeout to avoid to fetch the api directly.
      // It will help to avoid sendcing too much request at once
    } else {
      setMoviesSearchCompatibles([]);
    }
    onChangeText(text);
  };

  const handleMovieSelected = (
    item: MovieSearch
  ) => {
    // setMoviesAvailable(moviesAvailable =>
    //   moviesAvailable.filter(
    //     movie => movie.id !== item.id
    //   )
    // );

    // We remove all movies from the search bar`
    setMoviesSearchCompatibles([]);

    // `We clean the text from the search bar`
    onChangeText('');

    const movieChosenReleaseYear = new Date(
      item.release_date
    ).getFullYear();

    console.debug(
      `We add the movie ${item.title} (${movieChosenReleaseYear}) into the movie store`
    );
    refreshMovieFoundList(item);

    // We update the list of movies already chosen
    setMoviesAlreadyChosen([
      ...moviesAlreadyChosen,
      item,
    ]);
  };

  function fetchData(text: string) {
    const urlMovieSearch = `search/movie?query=${text}&include_adult=false&language=en-US&page=1`;

    const finalUrl = `${urlFetchBaseUrl}/${urlMovieSearch}`;
    console.debug(
      `Movie search url: ${finalUrl}`
    );

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiReadToken}`,
      },
    };

    fetch(finalUrl, options)
      .then(res => res.json())
      .then(json => {
        const fetchResults = json.results;
        console.log(
          `Number of movies fetched : ${fetchResults.length}`
        );
        setMoviesSearchCompatibles(fetchResults);
      })
      .catch(err => console.error(err));
  }

  return (
    <View style={stylesSearchBar.container}>
      <View
        style={[
          stylesSearchBar.searchBarContainer,
          {
            borderBottomLeftRadius:
              moviesSearchCompatibles.length > 0
                ? 0
                : 10,
            borderBottomRightRadius:
              moviesSearchCompatibles.length > 0
                ? 0
                : 10,
          },
        ]}>
        <TextInput
          style={stylesSearchBar.textInput}
          onChangeText={searchAvailableMovies}
          placeholder="Type to search a movie"
          value={text}
          testID="searchBarTextInput"
        />
        <Pressable
          style={
            stylesSearchBar.okButtonContainer
          }
          onPress={() => {
            if (
              moviesSearchCompatibles.length > 0
            ) {
              const item =
                moviesSearchCompatibles[0];
              handleMovieSelected(item);
            }
          }}>
          <Text testID="searchBarOkButton">
            OK
          </Text>
        </Pressable>
      </View>
      <ScrollView
        style={stylesSearchBar.scrollView}>
        <FlatList
          data={moviesSearchCompatibles}
          testID="movieList"
          renderItem={({ item, index }) => (
            <Pressable
              style={{
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderColor: 'darkblue',
                borderLeftWidth: 3,
                borderRightWidth: 3,
                borderBottomWidth:
                  index ===
                  moviesSearchCompatibles.length -
                    1
                    ? 3
                    : 0,
                backgroundColor: 'white',
                borderBottomLeftRadius:
                  index ===
                  moviesSearchCompatibles.length -
                    1
                    ? 10
                    : 0,
                borderBottomRightRadius:
                  index ===
                  moviesSearchCompatibles.length -
                    1
                    ? 10
                    : 0,
                overflow: 'hidden',
              }}
              onPress={() => {
                handleMovieSelected(item);
              }}
              testID="movieListPressable">
              <View
                style={
                  stylesSearchBar.imageContainer
                }>
                <Image
                  style={stylesSearchBar.image}
                  source={`${imagesUrlBase}/${item.poster_path}`}
                  contentFit="cover"
                  transition={200}
                  contentPosition={
                    'bottom center'
                  }
                />
              </View>
              <View
                style={{
                  width: '60%',
                  alignItems: 'center',
                }}>
                <Text>
                  {item.title} (
                  {new Date(
                    item.release_date
                  ).getFullYear()}
                  )
                </Text>
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
    overflow: 'hidden',
  },
  textInput: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  okButtonContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
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

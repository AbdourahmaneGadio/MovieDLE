import LifeBar from '@/components/LifeBar';
import MovieStore from '@/components/MovieStore';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  MovieDetails,
  MovieSearch,
} from './types/types';
import {
  apiReadToken,
  urlFetchBaseUrl,
} from './var/EnvVar';

export default function Index() {
  const maxLifePoints = 100;
  const lifeToLost = 10;
  const [lifeRemaining, setlifeRemaining] =
    useState(maxLifePoints);
  const [moviesChosen, setMoviesChosen] =
    useState<MovieDetails[]>([]);
  const [isGameOver, setIsGameOver] =
    useState(false);
  const [movieToFind, setMovieToFind] =
    useState<MovieDetails>({
      genres: [{ id: 0, name: '' }],
      id: 0,
      poster_path: '',
      release_date: '',
      runtime: 0,
      title: '',
    });

  const backgroundImage = require('@/assets/images/background/bruno-guerrero-haCls4xhdqE-unsplash.jpg');

  function fetchMovieDetails(id: number) {
    const maxPageRandomIndex = 500;
    const indexRandomPage = Math.floor(
      Math.random() * maxPageRandomIndex
    );

    const urlMovieDetails =
      id > 0
        ? `movie/${id}?language=en-US`
        : `discover/movie?include_adult=false&include_video=false&language=en-US&page=${maxPageRandomIndex}&sort_by=popularity.desc`;

    const finalUrl = `${urlFetchBaseUrl}/${urlMovieDetails}`;
    console.debug(
      `Movie details url: ${finalUrl}`
    );

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiReadToken}`,
      },
    };
    if (id > 0) {
      fetch(finalUrl, options)
        .then(res => res.json())
        .then(json => {
          const singleMovieChosen: MovieDetails =
            json;
          setMoviesChosen([
            ...moviesChosen,
            singleMovieChosen,
          ]);
        })
        .catch(err => console.error(err));
    } else {
      // We fetch from the discover api
      fetch(finalUrl, options)
        .then(res => res.json())
        .then(json => {
          const moviesDiscoverList = json.results;

          const maxResultsRandomIndex = 20;
          const indexRandomIndex = Math.floor(
            Math.random() * maxResultsRandomIndex
          );

          const randomMovieDiscover: MovieSearch =
            moviesDiscoverList[indexRandomIndex];
          const urlDetailsRandom = `${urlFetchBaseUrl}/${`movie/${randomMovieDiscover.id}?language=en-US`}`;
          // We refetch from the details api
          fetch(urlDetailsRandom, options)
            .then(res => res.json())
            .then(json => {
              const randomMovieDetails: MovieDetails =
                json;
              setMovieToFind(randomMovieDetails);

              const movieToFindReleaseYear =
                new Date(
                  randomMovieDetails.release_date
                ).getFullYear();

              console.debug(
                `The movie to find is : ${randomMovieDetails.title} (${movieToFindReleaseYear})`
              );
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
  }

  const handleButtonPress = (
    singleMovieChosen: MovieSearch
  ) => {
    fetchMovieDetails(singleMovieChosen.id);
    // We check the last movie chosen, and verify if it correspond

    if (singleMovieChosen.id === movieToFind.id) {
      setIsGameOver(true);
    } else {
      setlifeRemaining(
        lifeRemaining - lifeToLost
      );

      if (lifeRemaining - lifeToLost <= 0)
        setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setMoviesChosen([]);
    randomiseMovieToFind();
    setlifeRemaining(100);
    setIsGameOver(false);
  };

  const randomiseMovieToFind = () => {
    fetchMovieDetails(0);
  };

  useEffect(() => {
    // We select a random movie to find on start if none is defined

    randomiseMovieToFind();
  }, []);

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.imageBackground}>
      <View
        style={[
          styles.container,
          { paddingTop: 50 },
        ]}
        testID="indexContainer">
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgrey',
            padding: 10,
            minWidth: 200,
            width: '40%',
            marginVertical: 10,
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 3,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
            }}>
            MovieDLE
          </Text>
        </View>
        {isGameOver && (
          <Pressable
            testID="RetryButton"
            onPress={resetGame}
            style={{
              backgroundColor: 'pink',
              borderWidth: 2,
              borderColor: 'red',
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text>Retry ?</Text>
          </Pressable>
        )}
        {!isGameOver && (
          <SearchBar
            refreshMovieFoundList={
              handleButtonPress
            }
          />
        )}

        {moviesChosen.length > 0 && (
          <LifeBar
            lifeRemaining={lifeRemaining}
          />
        )}

        {moviesChosen.length > 0 && (
          <ScrollView
            contentContainerStyle={
              styles.scrollViewContainer
            }
            style={{ width: '95%' }}
            scrollEnabled={true}
            testID="scrollViewMovieStore">
            <MovieStore
              movies={moviesChosen}
              movieToFind={movieToFind}
            />
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollViewContainer: {
    flexGrow: 1,
    width: '100%',
  },
});

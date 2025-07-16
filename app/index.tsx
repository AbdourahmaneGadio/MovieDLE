import LifeBar from '@/components/LifeBar';
import MovieStore from '@/components/MovieStore';
import SearchBar from '@/components/SearchBar';
import movieDatabase from '@/database/movies.json';
import { useEffect, useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Movie } from './types/types';

export default function Index() {
  const [lifePointsLost, setLifePointsLost] =
    useState(0);
  const [moviesChosen, setMoviesChosen] =
    useState<Movie[]>([]);
  const [isGameOver, setIsGameOver] =
    useState(false);
  const [
    moviesFromDatabase,
    setMoviesFromDatabase,
  ] = useState(movieDatabase);
  const [movieToFind, setMovieToFind] =
    useState<Movie>();

  const backgroundImage = require('@/assets/images/background/bruno-guerrero-haCls4xhdqE-unsplash.jpg');

  const handleButtonPress = (
    singleMovieChosen: Movie
  ) => {
    setMoviesChosen([
      ...moviesChosen,
      singleMovieChosen,
    ]);

    if (singleMovieChosen !== movieToFind) {
      setLifePointsLost(lifePointsLost + 10);
    } else {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setMoviesChosen([]);
    setMoviesFromDatabase(movieDatabase);
    randomiseMovieToFind();
    setLifePointsLost(0);
    setIsGameOver(false);
  };

  const randomiseMovieToFind = () => {
    const movieDatabaseLength =
      movieDatabase.length;
    const maxRandomMovieIndex =
      movieDatabaseLength - 1;
    const indexRandom = Math.floor(
      Math.random() * maxRandomMovieIndex
    );
    const newMovieToFind =
      movieDatabase[indexRandom];
    setMovieToFind(newMovieToFind);
    console.debug(
      `The movie to find is : ${newMovieToFind.Title} (${newMovieToFind.Year})`
    );
  };

  useEffect(() => {
    randomiseMovieToFind();
  }, []);

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgrey',
            padding: 10,
            minWidth: 200,
            maxWidth: '20%',
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
            movieDatabase={moviesFromDatabase}
          />
        )}

        {moviesChosen.length > 0 && (
          <LifeBar
            lifePointsLost={lifePointsLost}
          />
        )}

        {moviesChosen.length > 0 && (
          <ScrollView
            contentContainerStyle={
              styles.scrollViewContainer
            }
            style={{ width: '95%' }}
            testID="scrollViewMovieStore">
            <MovieStore movies={moviesChosen} />
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

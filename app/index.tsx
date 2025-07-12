import LifeBar from '@/components/LifeBar';
import MovieStore from '@/components/MovieStore';
import SearchBar from '@/components/SearchBar';
import movieDatabase from '@/database/movies.json';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Movie } from './types/types';

export default function Index() {
  const [lifePointsLost, setLifePointsLost] = useState(0);
  const [moviesChosen, setMoviesChosen] = useState<Movie[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [moviesFromDatabase, setMoviesFromDatabase] = useState(movieDatabase)
  const movieToFind = movieDatabase[0];

  const handleButtonPress = (singleMovieChosen: Movie) => {
    setMoviesChosen([...moviesChosen, singleMovieChosen]);

    if (singleMovieChosen !== movieToFind) {
      setLifePointsLost(lifePointsLost + 10);
    } else{
      setIsGameOver(true)
    }
  };

  const resetGame = () => {
    setMoviesChosen([]);
    setMoviesFromDatabase(movieDatabase)
    setLifePointsLost(0)
    setIsGameOver(false)
  };

  return (
    <View
    style={styles.container}>
        <View  style={{
     
 alignItems:'center', justifyContent:'center', backgroundColor:'black', padding:10, width:'50%', marginVertical:10
   }}>
      <Text style={{color:'white'}}>MovieDLE</Text>
      </View>
  {isGameOver && <Pressable testID='RetryButton' onPress={resetGame} style={{backgroundColor:'pink', borderWidth:2, borderColor: 'red',padding:10, borderRadius:10, marginBottom:10}}>
<Text>Retry ?</Text>
</Pressable>}
{   !isGameOver &&    <SearchBar refreshMovieFoundList={handleButtonPress} movieDatabase={moviesFromDatabase} />
}

{ moviesChosen.length>0 &&  <LifeBar lifePointsLost={lifePointsLost} />}
 {   moviesChosen.length>0 && <MovieStore movies={moviesChosen} />}
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },


});
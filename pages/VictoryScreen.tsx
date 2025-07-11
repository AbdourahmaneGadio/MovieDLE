import { Movie } from '@/app/types/types';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type VictoryScreenProps = {
  movieToFind: Movie;
};

export default function VictoryScreen({ movieToFind }: VictoryScreenProps) {

  return (
    <View style={stylesVictoryScreen.container}>
      <View style={{ width: '100%', }}>
        <View style={stylesVictoryScreen.imageContainer}>
          <Image
            style={stylesVictoryScreen.image}
            source={movieToFind.Poster}
            contentFit="cover"
            transition={1000}
          />
        </View>   
        <View style={stylesVictoryScreen.textContainer}>
          <Text>{movieToFind.Title} ({movieToFind.Year})</Text>   </View>
      </View>
    </View>
  );
}

const stylesVictoryScreen = StyleSheet.create({
  container: {
    borderColor: 'purple',
    borderWidth: 5,
    marginVertical: 10,
    flexDirection: 'row',
    width: `70%`,
    height: '50%',
  }, imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '80%',
    marginHorizontal: 'auto',
    marginVertical:10
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
  }, textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

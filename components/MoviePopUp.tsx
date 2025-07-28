import { MovieDetails } from '@/app/types/types';
import { imagesUrlBase } from '@/app/var/EnvVar';
import { Image } from 'expo-image';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


interface MoviePopUpProps {
  movieToFind: MovieDetails;
}

export default function MoviePopUp({
  movieToFind,
}: MoviePopUpProps) {

  return (
    <View style={stylesMoviePopUp.container}>
        <Text>The movie to find was :</Text>
        <Text>{movieToFind.title} ({new Date(movieToFind.release_date).getFullYear()})</Text>
                    <View
                      style={
                        stylesMoviePopUp.imageContainer
                      }>
                      <Image
                        style={stylesMoviePopUp.image}
                        source={`${imagesUrlBase}${movieToFind.poster_path}`}
                        contentFit="cover"
                        transition={1000}
                      />
                    </View>
        </View>
  );
}

const stylesMoviePopUp = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '80%',
    height:'65%',
    backgroundColor:'gold',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius:20
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
    marginHorizontal: 'auto',
    borderRadius: 20,
  },  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
    borderRadius: 15,
  },
});

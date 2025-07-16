import { Movie } from '@/app/types/types';
import { Image } from 'expo-image';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface MovieStoreProps {
  movies: Movie[];
}

export default function MovieStore({
  movies,
}: MovieStoreProps) {
  return (
    <View
      style={stylesMovieStore.container}
      testID="movieStoreContainer">
      <View
        style={stylesMovieStore.columnsContainer}
        testID="movieColumns">
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Image
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Title
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Genre(s)
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Release year
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Director
          </Text>
        </View>
      </View>

      <FlatList
        data={movies}
        testID="moviesList"
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={stylesMovieStore.movieItem}
            testID="movieItem">
            <View
              style={
                stylesMovieStore.imageContainer
              }>
              <Image
                style={stylesMovieStore.image}
                source={item.Poster}
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View
              style={
                stylesMovieStore.textContainer
              }>
              <Text
                style={stylesMovieStore.textItem}>
                {item.Title}
              </Text>
            </View>
            <View
              style={
                stylesMovieStore.textContainer
              }>
              <Text
                style={stylesMovieStore.textItem}>
                {item.Genre}
              </Text>
            </View>
            <View
              style={
                stylesMovieStore.textContainer
              }>
              <Text
                style={stylesMovieStore.textItem}>
                {item.Year}
              </Text>
            </View>
            <View
              style={
                stylesMovieStore.textContainer
              }>
              <Text
                style={stylesMovieStore.textItem}>
                {item.Director}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const stylesMovieStore = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  columnsContainer: {
    marginVertical: 15,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnTextContainer: {
    width: '18%', // 100 divide by number of columns
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
  columnTextItem: {
    textAlign: 'center',
    fontSize: 15,
  },
  movieItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 100,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18%',
    height: '100%',
    marginHorizontal: 'auto',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
    borderRadius: 15,
  },
  textContainer: {
    width: '18%', // 100 divide by number of columns
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textItem: {
    textAlign: 'center',
    fontSize: 12,
  },
});

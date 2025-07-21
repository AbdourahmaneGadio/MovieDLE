import {
  cleanup,
  render,
} from '@testing-library/react-native';

import { MovieDetails } from '@/app/types/types';
import MovieStore from '@/components/MovieStore';

afterEach(cleanup);

const fakeMovieDetails: MovieDetails = {
  genres: [{ id: 1, name: 'Drama' }],
  id: 1,
  poster_path: 'randomPath',
  release_date: new Date().toString(),
  runtime: 1,
  title: 'Movie number one',
};

const fakeMovieDetails2: MovieDetails = {
  genres: [{ id: 2, name: 'Comedy' }],
  id: 2,
  poster_path: 'anotherRandomPath',
  release_date: new Date().toString(),
  runtime: 2,
  title: 'Movie number two',
};

const movies = [
  fakeMovieDetails,
  fakeMovieDetails2,
];

describe('<MovieStore />', () => {
  test('MovieStore renders correctly', () => {
    const tree = render(
      <MovieStore
        movies={[]}
        movieToFind={fakeMovieDetails}
      />
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('Movies list should appear on screen',  () => {
    const { getByTestId, getAllByTestId } =
      render(
        <MovieStore
          movies={[]}
          movieToFind={fakeMovieDetails}
        />
      );

    const movieList =  getByTestId('moviesList');
    expect(movieList).toBeOnTheScreen();

  });
});

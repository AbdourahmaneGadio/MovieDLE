import {
  cleanup,
  render,
} from '@testing-library/react-native';

import { MovieDetails } from '@/app/types/types';
import MovieStore from '@/components/MovieStore';

afterEach(cleanup);

const fakeMovieDetails: MovieDetails = {
  genres: [{ id: 0, name: '' }],
  id: 0,
  poster_path: '',
  release_date: '',
  runtime: 0,
  title: '',
};

const fakeMovieDetails2: MovieDetails = {
  genres: [{ id: 1, name: '' }],
  id: 1,
  poster_path: '',
  release_date: '',
  runtime: 1,
  title: '',
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

  test('Movies should be in the list', () => {
    const { getByTestId, getAllByTestId } =
      render(
        <MovieStore
          movies={movies}
          movieToFind={fakeMovieDetails}
        />
      );

    const movieList = getByTestId('moviesList');
    expect(movieList).toBeOnTheScreen();

    const movieItems =
      getAllByTestId('movieItem');
    expect(movieItems).toHaveLength(
      movies.length
    );
  });
});

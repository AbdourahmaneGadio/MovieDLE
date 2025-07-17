import {
  cleanup,
  render,
} from '@testing-library/react-native';

import MovieStore from '@/components/MovieStore';
import movieDatabase from '@/database/movies.json';

afterEach(cleanup);

describe('<MovieStore />', () => {
  test('MovieStore renders correctly', () => {
    const tree = render(
      <MovieStore
        movies={[]}
        movieToFind={movieDatabase[0]}
      />
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('Movies should be in the list', () => {
    const { getByTestId, getAllByTestId } =
      render(
        <MovieStore
          movies={movieDatabase}
          movieToFind={movieDatabase[0]}
        />
      );

    const movieList = getByTestId('moviesList');
    expect(movieList).toBeOnTheScreen();

    const movieItems =
      getAllByTestId('movieItem');
    expect(movieItems).toHaveLength(
      movieDatabase.length
    );
  });
});

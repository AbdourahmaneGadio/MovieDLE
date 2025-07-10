import { render } from '@testing-library/react-native';

import MovieStore from '@/components/MovieStore';
import movieDatabase from '@/database/movies.json';

describe('<MovieStore />', () => {
  test('Text renders correctly on MovieStore', () => {
    const { getByText } = render(<MovieStore movies={[]} />);

    getByText('Image');
    getByText('Title');
    getByText('Genre(s)');
    getByText('Release year');
    getByText('Director');
  });

  test('Movies should be in the list', () => {
    const { getByTestId, getAllByTestId } = render(<MovieStore movies={movieDatabase} />);

    const movieList = getByTestId('moviesList');
    expect(movieList).toBeOnTheScreen();

    const movieItems = getAllByTestId('movieItem');
    expect(movieItems).toHaveLength(movieDatabase.length);
  });
});

import { render } from '@testing-library/react-native';

import MovieStore  from "@/components/MovieStore";

describe('<MovieStore />', () => {
  test('Text renders correctly on MovieStore', () => {
    const { getByText } = render(<MovieStore />);

    getByText('Image');
    getByText('Title');
    getByText('Genre(s)');
    getByText('Release year');
    getByText('Director');
  });
});

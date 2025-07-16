import {
  cleanup,
  render,
} from '@testing-library/react-native';

import Index from '@/app/index';

afterEach(cleanup);

describe('<Index />', () => {
  test('Index renders correctly', () => {
    const tree = render(<Index />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});

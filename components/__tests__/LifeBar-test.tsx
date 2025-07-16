import {
  cleanup,
  render,
} from '@testing-library/react-native';

import LifeBar from '@/components/LifeBar';

afterEach(cleanup);

describe('<LifeBar />', () => {
  test('LifeBar renders correctly', () => {
    const tree = render(
      <LifeBar lifePointsLost={0} />
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('Remaining life should be full', () => {
    const { getByTestId } = render(
      <LifeBar lifePointsLost={0} />
    );

    const remainingLife = getByTestId(
      'remainingLife'
    );
    const lifeLost = getByTestId('lifeLost');

    expect(remainingLife).toBeOnTheScreen();
    expect(remainingLife).toHaveStyle({
      width: '100%',
    });
    expect(lifeLost).toHaveStyle({
      width: '0%',
      visibility: 'hidden',
    });
  });

  test('Life bar should be half full', () => {
    const { getByTestId } = render(
      <LifeBar lifePointsLost={50} />
    );

    const remainingLife = getByTestId(
      'remainingLife'
    );
    const lifeLost = getByTestId('lifeLost');

    expect(remainingLife).toBeOnTheScreen();
    expect(remainingLife).toHaveStyle({
      width: '50%',
    });
    expect(lifeLost).toHaveStyle({
      width: '50%',
      visibility: '',
    });
  });

  test('Life lost should be full', () => {
    const { getByTestId } = render(
      <LifeBar lifePointsLost={100} />
    );

    const remainingLife = getByTestId(
      'remainingLife'
    );
    const lifeLost = getByTestId('lifeLost');

    expect(remainingLife).toBeOnTheScreen();
    expect(remainingLife).toHaveStyle({
      width: '0%',
      visibility: 'hidden',
    });
    expect(lifeLost).toHaveStyle({
      width: '100%',
      visibility: '',
    });
  });
});

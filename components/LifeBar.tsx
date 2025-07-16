import { StyleSheet, View } from 'react-native';

type LifeBarProps = {
  lifePointsLost: number;
};

export default function LifeBar({
  lifePointsLost,
}: LifeBarProps) {
  const lifePoints = 100;
  const lifePointsRemaning =
    lifePoints - lifePointsLost;

  return (
    <View style={stylesLifeBar.container}>
      <View
        style={{
          backgroundColor: 'green',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          width: `${lifePointsRemaning}%`,
          visibility:
            lifePointsRemaning > 0
              ? ''
              : 'hidden',
        }}
        testID="remainingLife"></View>
      <View
        style={{
          backgroundColor: 'red',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          width: `${lifePointsLost}%`,
          visibility:
            lifePointsLost > 0 ? '' : 'hidden',
        }}
        testID="lifeLost"></View>
    </View>
  );
}

const stylesLifeBar = StyleSheet.create({
  container: {
    borderColor: 'gold',
    borderWidth: 5,
    marginVertical: 10,
    flexDirection: 'row',
    width: `90%`,
    borderRadius: 10,
    height: 40,
  },
});

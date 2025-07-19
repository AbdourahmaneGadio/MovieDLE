import { StyleSheet, View } from 'react-native';

type LifeBarProps = {
  lifeRemaining: number;
};

export default function LifeBar({
  lifeRemaining,
}: LifeBarProps) {
  const lifePointsTotal = 100;
  const lifePointsLost =
    lifePointsTotal - lifeRemaining;

  return (
    <View style={stylesLifeBar.container}>
      <View
        style={{
          backgroundColor: 'green',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          borderTopRightRadius:
            lifeRemaining === 100 ? 5 : 0,
          borderBottomRightRadius:
            lifeRemaining === 100 ? 5 : 0,
          width: `${lifeRemaining}%`,
          visibility:
            lifeRemaining > 0 ? '' : 'hidden',
        }}
        testID="remainingLife"></View>
      <View
        style={{
          backgroundColor: 'red',
          borderTopLeftRadius:
            lifePointsLost === 100 ? 5 : 0,
          borderBottomLeftRadius:
            lifePointsLost === 100 ? 5 : 0,
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

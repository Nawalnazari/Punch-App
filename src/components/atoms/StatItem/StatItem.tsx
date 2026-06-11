import { Text, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly label: string;
  readonly value: string;
};

function StatItem({ label, value }: Properties) {
  const { fonts, gutters, layout } = useTheme();

  return (
    <View style={[layout.itemsCenter, layout.flex_1]}>
      <Text style={[fonts.bold, fonts.gray800, fonts.size_12]}>{label}</Text>
      <Text style={[fonts.gray800, fonts.size_16, gutters.marginTop_12]}>
        {value}
      </Text>
    </View>
  );
}

export default StatItem;

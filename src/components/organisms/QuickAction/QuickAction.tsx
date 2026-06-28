import { Text, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly icon: string;
  readonly title: string;
};

function QuickAction({ icon, title }: Properties) {
  const { backgrounds, fonts, layout } = useTheme();

  return (
    <View style={[layout.itemsCenter, { width: 120 }]}>
      <View
        style={[
          backgrounds.gray50,
          layout.itemsCenter,
          layout.justifyCenter,
          {
            borderRadius: 36,
            elevation: 4,
            height: 72,
            shadowColor: '#000000',
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.12,
            shadowRadius: 5,
            width: 72,
          },
        ]}
      >
        <Text style={[fonts.red500, fonts.size_24]}>{icon}</Text>
      </View>

      <Text
        style={[
          fonts.bold,
          fonts.gray400,
          fonts.size_12,
          fonts.alignCenter,
          { marginTop: 14 },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

export default QuickAction;

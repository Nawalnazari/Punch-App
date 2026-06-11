import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly onPress?: () => void;
};

function PunchButton({ onPress }: Properties) {
  const { backgrounds, fonts, gutters, layout } = useTheme();

  return (
    <View style={[layout.itemsCenter, gutters.marginTop_80]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          backgrounds.red500,
          layout.itemsCenter,
          layout.justifyCenter,
          {
            borderColor: '#A21212',
            borderRadius: 68,
            borderWidth: 6,
            height: 136,
            width: 136,
          },
        ]}
      >
        <View
          style={[
            layout.itemsCenter,
            layout.justifyCenter,
            {
              borderRadius: 60,
              height: 120,
              width: 120,
            },
          ]}
        >
          <Text style={[fonts.size_32]}>☝️</Text>
          <Text
            style={[
              fonts.bold,
              fonts.gray50,
              fonts.size_16,
              gutters.marginTop_12,
            ]}
          >
            PUNCH IN
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PunchButton;

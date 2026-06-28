import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly icon: string;
  readonly isActive?: boolean;
  readonly label: string;
  readonly onPress?: () => void;
};

function TabItem({
  icon,
  isActive = false,
  label,
  onPress = undefined,
}: Properties) {
  const { backgrounds, fonts, gutters, layout } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        layout.itemsCenter,
        layout.justifyCenter,
        layout.flex_1,
        gutters.paddingVertical_12,
      ]}
    >
      <View
        style={[
          layout.itemsCenter,
          layout.justifyCenter,
          isActive
            ? [backgrounds.red500, { borderRadius: 14, height: 28, width: 28 }]
            : undefined,
        ]}
      >
        <Text style={[fonts.size_16]}>{icon}</Text>
      </View>
      <Text
        style={[
          fonts.size_12,
          gutters.marginTop_12,
          isActive ? fonts.red500 : fonts.gray400,
          isActive ? fonts.bold : undefined,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default TabItem;

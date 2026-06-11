import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly location: string;
  readonly onChangeLocation?: () => void;
};

function WorkLocationCard({
  location,
  onChangeLocation = undefined,
}: Properties) {
  const { backgrounds, fonts, gutters, layout } = useTheme();

  return (
    <View
      style={[
        backgrounds.gray50,
        gutters.marginTop_16,
        gutters.padding_24,
        { borderRadius: 16, overflow: 'hidden' },
      ]}
    >
      <View style={[layout.absolute, { inset: 0 }]}>
        <View
          style={[
            backgrounds.gray100,
            {
              borderRadius: 120,
              height: 180,
              left: -20,
              opacity: 0.2,
              position: 'absolute',
              top: 40,
              width: 180,
            },
          ]}
        />
        <View
          style={[
            backgrounds.gray100,
            {
              borderRadius: 140,
              height: 200,
              opacity: 0.2,
              position: 'absolute',
              right: -40,
              top: 10,
              width: 200,
            },
          ]}
        />
      </View>

      <View style={[layout.itemsCenter, layout.justifyCenter, layout.z1]}>
        <Text style={[fonts.gray400, fonts.size_16]}>📍 Work Location</Text>
        <Text
          style={[
            fonts.bold,
            fonts.gray800,
            fonts.size_24,
            gutters.marginTop_16,
          ]}
        >
          {location}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onChangeLocation}
          style={[
            backgrounds.red500,
            gutters.marginTop_24,
            gutters.paddingHorizontal_24,
            gutters.paddingVertical_12,
            { borderRadius: 24 },
          ]}
        >
          <Text style={[fonts.bold, fonts.gray50, fonts.size_16]}>
            Change Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WorkLocationCard;

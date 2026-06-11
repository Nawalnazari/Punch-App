import { Text, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly name: string;
  readonly userInitials: string;
};

function HomeHeader({ name, userInitials }: Properties) {
  const { backgrounds, borders, fonts, gutters, layout } = useTheme();

  return (
    <View>
      <View style={[backgrounds.red500, { height: 24 }]} />

      <View
        style={[
          backgrounds.gray50,
          borders.gray100,
          borders.w_1,
          layout.row,
          layout.itemsCenter,
          layout.justifyBetween,
          gutters.padding_16,
        ]}
      >
        <View style={[layout.row, layout.itemsCenter, gutters.gap_12]}>
          <View
            style={[
              backgrounds.gray100,
              layout.itemsCenter,
              layout.justifyCenter,
              { borderRadius: 20, height: 40, width: 40 },
            ]}
          >
            <Text style={[fonts.bold, fonts.red500]}>{userInitials}</Text>
          </View>

          <View>
            <Text style={[fonts.gray200, fonts.size_12]}>Welcome back</Text>
            <Text style={[fonts.bold, fonts.red500, fonts.size_16]}>
              {name}
            </Text>
          </View>
        </View>

        <Text style={[fonts.gray200, fonts.size_24]}>🔔</Text>
      </View>
    </View>
  );
}

export default HomeHeader;

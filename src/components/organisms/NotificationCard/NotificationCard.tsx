import { Text, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly date: string;
  readonly message: string;
};

function NotificationCard({ date, message }: Properties) {
  const { backgrounds, fonts, layout } = useTheme();

  return (
    <View
      style={[
        backgrounds.gray50,
        layout.row,
        layout.itemsCenter,
        layout.justifyBetween,
        {
          borderRadius: 12,
          elevation: 3,
          marginTop: 12,
          paddingHorizontal: 16,
          paddingVertical: 16,
          shadowColor: '#000000',
          shadowOffset: { height: 2, width: 0 },
          shadowOpacity: 0.12,
          shadowRadius: 5,
        },
      ]}
    >
      <View style={[layout.row, layout.itemsCenter, { flex: 1 }]}>
        <View
          style={[
            backgrounds.gray50,
            layout.itemsCenter,
            layout.justifyCenter,
            {
              backgroundColor: '#F9ECEC',
              borderRadius: 10,
              height: 42,
              width: 42,
            },
          ]}
        >
          <Text style={[fonts.red500, fonts.size_16]}>⚠️</Text>
        </View>

        <View style={[{ marginLeft: 16 }]}>
          <Text style={[fonts.bold, fonts.gray800, fonts.size_16]}>
            Daily Report
          </Text>
          <Text style={[fonts.gray400, fonts.size_16, { marginTop: 4 }]}>
            {message}
          </Text>
        </View>
      </View>

      <Text
        style={[fonts.bold, fonts.gray800, fonts.size_16, { marginLeft: 12 }]}
      >
        {date}
      </Text>
    </View>
  );
}

export default NotificationCard;

import { ScrollView, Text, View } from 'react-native';

import { useTheme } from '@/theme';

import { NotificationCard, QuickAction } from '@/components/organisms';
import { SafeScreen } from '@/components/templates';

const notifications = [
  { date: '22/5/2026', id: '1', message: 'You have unfinish daily report!' },
  { date: '21/5/2026', id: '2', message: 'You have unfinish daily report!' },
  { date: '21/5/2026', id: '3', message: 'You have unfinish daily report!' },
] as const;

function Dashboard() {
  const { backgrounds, fonts, gutters, layout } = useTheme();

  return (
    <SafeScreen style={[backgrounds.red500]}>
      <View style={[backgrounds.gray50, layout.flex_1, layout.justifyBetween]}>
        <ScrollView contentContainerStyle={[gutters.paddingBottom_24]}>
          <View style={[layout.itemsCenter, gutters.paddingTop_16]}>
            <Text style={[fonts.bold, fonts.red500, fonts.size_24]}>
              Dashboard
            </Text>
          </View>

          <View style={[gutters.marginHorizontal_24, gutters.marginTop_24]}>
            <Text style={[fonts.bold, fonts.gray400, fonts.size_16]}>
              QUICK ACTIONS
            </Text>

            <View style={[layout.row, gutters.marginTop_16]}>
              <QuickAction icon="👜" title="Daily Report" />
              <QuickAction icon="🧍" title="Attendance" />
            </View>

            <Text
              style={[
                fonts.bold,
                fonts.gray400,
                fonts.size_16,
                gutters.marginTop_32,
              ]}
            >
              NOTIFICATIONS
            </Text>

            {notifications.map((notification) => {
              return (
                <NotificationCard
                  date={notification.date}
                  key={notification.id}
                  message={notification.message}
                />
              );
            })}

            <Text
              style={[
                fonts.alignCenter,
                fonts.bold,
                fonts.red500,
                fonts.size_16,
                gutters.marginTop_24,
              ]}
            >
              See Notification List 》
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
}

export default Dashboard;

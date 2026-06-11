import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { useTheme } from '@/theme';

import { PunchButton } from '@/components/atoms';
import {
  HomeHeader,
  PunchStats,
  RemarksField,
  WorkLocationCard,
} from '@/components/molecules';
import { BottomNavBar } from '@/components/organisms';
import { SafeScreen } from '@/components/templates';

function Home() {
  const { backgrounds, gutters, layout } = useTheme();
  const [remarks, setRemarks] = useState('');

  return (
    <SafeScreen style={[backgrounds.red500]}>
      <View style={[backgrounds.gray50, layout.flex_1, layout.justifyBetween]}>
        <ScrollView contentContainerStyle={[gutters.paddingBottom_24]}>
          <HomeHeader name="Ahmed Nabil" userInitials="AN" />

          <View style={[gutters.paddingHorizontal_16]}>
            <WorkLocationCard location="Tech Park, Cairo" />
            <RemarksField remarks={remarks} setRemarks={setRemarks} />
            <PunchStats
              firstPunchIn="09:00 AM"
              lastPunchOut="05:00 PM"
              totalPunchIn="08:00"
            />
            <PunchButton />
          </View>
        </ScrollView>

        <BottomNavBar />
      </View>
    </SafeScreen>
  );
}

export default Home;

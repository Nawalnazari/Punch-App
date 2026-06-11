import { View } from 'react-native';

import { useTheme } from '@/theme';

import { StatItem } from '@/components/atoms';

type Properties = {
  readonly firstPunchIn: string;
  readonly lastPunchOut: string;
  readonly totalPunchIn: string;
};

function PunchStats({ firstPunchIn, lastPunchOut, totalPunchIn }: Properties) {
  const { gutters, layout } = useTheme();

  return (
    <View style={[gutters.marginTop_24]}>
      <View style={[layout.row, layout.justifyBetween]}>
        <StatItem label="First Punch In" value={firstPunchIn} />
        <StatItem label="Total Hours" value={totalPunchIn} />
        <StatItem label="Last Punch Out" value={lastPunchOut} />
      </View>
    </View>
  );
}

export default PunchStats;

import type { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';

import { useTheme } from '@/theme';

import { TextInput } from '@/components/atoms';

type Properties = {
  readonly remarks: string;
  readonly setRemarks: Dispatch<SetStateAction<string>>;
};

function RemarksField({ remarks, setRemarks }: Properties) {
  const { borders, fonts, gutters } = useTheme();

  return (
    <View style={[gutters.marginTop_24]}>
      <Text style={[fonts.bold, fonts.gray800, fonts.size_16]}>Remarks</Text>

      <TextInput
        onChangeText={setRemarks}
        placeholder="Enter Remarks"
        placeholderTextColor={fonts.gray200.color}
        style={[
          fonts.gray800,
          fonts.size_16,
          gutters.paddingVertical_12,
          borders.wBottom_1,
          borders.gray100,
        ]}
        value={remarks}
      />
    </View>
  );
}

export default RemarksField;

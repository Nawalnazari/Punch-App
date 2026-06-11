import type { TextInputProps } from 'react-native';

import { TextInput as RNTextInput, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = TextInputProps;

function TextInput(props: Properties) {
  const { borders, fonts } = useTheme();

  return (
    <View>
      <RNTextInput
        placeholderTextColor={fonts.gray200.color}
        style={[
          borders.gray100,
          borders.wBottom_1,
          fonts.gray800,
          fonts.size_24,
          { paddingVertical: 12 },
        ]}
        {...props}
      />
    </View>
  );
}

export default TextInput;

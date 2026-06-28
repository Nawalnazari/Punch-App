import type { StackScreenProps } from '@react-navigation/stack';

import { Paths } from '@/navigation/paths';

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Dashboard]: undefined;
  [Paths.Example]: undefined;
  [Paths.Home]: undefined;
  [Paths.Startup]: undefined;
};

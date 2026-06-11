import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/theme';

import { TabItem } from '@/components/atoms';

type Properties = {
  readonly onTabChange?: (tabId: number) => void;
};

function BottomNavBar({ onTabChange }: Properties = {}) {
  const [activeTab, setActiveTab] = useState(0);
  const { backgrounds, borders, layout } = useTheme();

  const handleTabPress = (tabId: number) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <View
      style={[
        backgrounds.gray50,
        borders.gray100,
        borders.wTop_1,
        layout.row,
        layout.itemsCenter,
        layout.justifyAround,
        { paddingBottom: 16, paddingTop: 12 },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handleTabPress(0);
        }}
        style={[layout.flex_1, layout.itemsCenter]}
      >
        <TabItem icon="📍" isActive={activeTab === 0} label="Location" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handleTabPress(1);
        }}
        style={[layout.flex_1, layout.itemsCenter]}
      >
        <TabItem icon="📍" isActive={activeTab === 1} label="Stats" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handleTabPress(2);
        }}
        style={[layout.flex_1, layout.itemsCenter]}
      >
        <TabItem icon="📍" isActive={activeTab === 2} label="Profile" />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNavBar;

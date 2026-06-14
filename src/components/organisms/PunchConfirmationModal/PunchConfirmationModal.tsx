import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/theme';

type Properties = {
  readonly message?: string;
  readonly onClose: () => void;
  readonly onConfirm?: () => void;
  readonly title?: string;
  readonly visible: boolean;
};

function PunchConfirmationModal(properties: Properties) {
  const { message, onClose, onConfirm, title, visible } = properties;
  const { backgrounds, fonts, gutters, layout } = useTheme();

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <View
        style={[
          layout.flex_1,
          layout.itemsCenter,
          layout.justifyCenter,
          { backgroundColor: 'rgba(0, 0, 0, 0.35)' },
        ]}
      >
        <View
          style={[
            backgrounds.gray50,
            gutters.padding_24,
            { borderRadius: 20, maxWidth: 300, width: '85%' },
          ]}
        >
          <View style={[layout.itemsCenter]}>
            <View
              style={[
                backgrounds.gray50,
                layout.itemsCenter,
                layout.justifyCenter,
                {
                  borderColor: '#F0B44D',
                  borderRadius: 28,
                  borderWidth: 3,
                  height: 56,
                  width: 56,
                },
              ]}
            >
              <Text style={[fonts.size_24]}>🕒</Text>
            </View>

            <Text
              style={[
                fonts.bold,
                fonts.gray800,
                fonts.size_24,
                gutters.marginTop_16,
              ]}
            >
              {title ?? 'Punch In'}
            </Text>

            <Text
              style={[
                fonts.alignCenter,
                fonts.gray400,
                fonts.size_16,
                gutters.marginTop_12,
              ]}
            >
              {message ?? 'Are you sure you want to punch in today?'}
            </Text>
          </View>

          <View
            style={[layout.row, layout.justifyBetween, gutters.marginTop_24]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onClose}
              style={[
                backgrounds.gray100,
                layout.itemsCenter,
                layout.justifyCenter,
                { borderRadius: 10, height: 44, width: '47%' },
              ]}
            >
              <Text style={[fonts.bold, fonts.gray800, fonts.size_16]}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onConfirm ?? onClose}
              style={[
                backgrounds.red500,
                layout.itemsCenter,
                layout.justifyCenter,
                { borderRadius: 10, height: 44, width: '47%' },
              ]}
            >
              <Text style={[fonts.bold, fonts.gray50, fonts.size_16]}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default PunchConfirmationModal;

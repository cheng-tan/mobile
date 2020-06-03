import React, {useCallback} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useI18n} from '@shopify/react-i18n';

import {Box} from './Box';
import {Icon} from './Icon';
import {Text} from './Text';

export interface HeaderProps {
  isOverlay?: boolean;
}

export const Header = ({isOverlay}: HeaderProps) => {
  const [i18n] = useI18n();
  const navigation = useNavigation();
  const onLogoPress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);
  return (
    <TouchableWithoutFeedback onPress={onLogoPress}>
      <Box flexDirection="row" alignItems="center" justifyContent="center" marginVertical='-xl'>
        <Box marginHorizontal="s">
          <Icon size={24} name="uw-logo-white" />
        </Box>
        <Icon size={116} name="covidsafe-logo-white" />
      </Box>
    </TouchableWithoutFeedback>
  );
};

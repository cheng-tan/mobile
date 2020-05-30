import {Appearance} from 'react-native';

export const palette = {
  brandBlue: '#002D42',
  linkBlue: '#0278A4',
  bodyBlack: '#212121',
  black: '#000000',
  bodySubdued: '#5B5B5B',
  greenBright: '#A4DE82',
  white: '#FFFFFF',
  fadedTextWhite: 'rgba(255, 255, 255, 0.65)',
  fadedWhite: 'rgba(0, 0, 0, 0.2)',
  successLight: '#D8EECA',
  success: '#278400',
  successDark: '#2B542C',
  errorLight: '#F3E9EB',
  error: '#D3080C',
  errorDark: '#923534',
  brandRed: '#AF3C43',
  brandGreen: '#333000',
  lightBlue: '#CCEFFF',
  neutralGrey: '#F4F4F4',
  darkGrey: '#303030',
  fadedYellow: '#FFF5D9',
};

const lightTheme = {
  colors: {
    mainBackground: palette.brandBlue,
    overlayBackground: palette.white,
    overlayBodyText: palette.bodyBlack,
    fadedBackground: palette.fadedWhite,
    bodyText: palette.white,
    bodyTextFaded: palette.fadedTextWhite,
    bodyTextSubdued: palette.bodySubdued,
    statusSuccess: palette.success,
    successBackground: palette.successLight,
    statusError: palette.error,
    errorBackground: palette.errorLight,
    errorText: palette.error,
    infoBlockBrightBackground: palette.lightBlue,
    infoBlockBrightText: palette.brandBlue,
    infoBlockNeutralBackground: palette.neutralGrey,
    infoBlockNeutralText: palette.bodyBlack,
    infoBlockBlackBackground: palette.bodyBlack,
    infoBlockBlackText: palette.white,
    infoBlockYellowBackground: palette.fadedYellow,
    divider: palette.fadedWhite,
  },
  spacing: {
    /* eslint-disable id-length */
    xs: 6,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 43,
    '-s': -8,
    '-m': -16,
    '-l': -24,
    '-xl': -32,
    '-xxl': -43,
    none: 0,
    /* eslint-enable id-length */
  },
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    smallText: {
      fontFamily: 'Nunito',
      fontSize: 14,
      lineHeight: 22,
    },
    bodyText: {
      fontFamily: 'Nunito',
      fontSize: 18,
      lineHeight: 24,
    },
    bodySubTitle: {
      fontFamily: 'Nunito-Bold',
      fontSize: 18,
      lineHeight: 24,
    },
    bodyTitle: {
      fontFamily: 'Nunito-Bold',
      fontSize: 24,
      lineHeight: 28,
    },
    overlayTitle: {
      fontFamily: 'Nunito',
      fontSize: 18,
      lineHeight: 22,
    },
    homeHeader: {
      fontFamily: 'Nunito-Bold',
      fontSize: 16,
      lineHeight: 22,
    },
    codeInput: {
      fontFamily: 'Nunito',
      fontSize: 26,
      lineHeight: 28,
    },
    menuItemTitle: {
      fontFamily: 'Nunito',
      fontSize: 16,
      lineHeight: 22,
    },
    menuItemSubtitle: {
      fontFamily: 'Nunito',
      fontSize: 12,
      lineHeight: 16,
    },
  },
  buttonVariants: {
    bigFlat: {
      color: palette.linkBlue,
      height: 52,
      textColor: palette.white,
      fontFamily: 'Nunito',
      fontSize: 18,
      borderWidth: undefined,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    bigFlatWhite: {
      color: palette.white,
      height: 52,
      textColor: palette.linkBlue,
      fontFamily: 'Nunito',
      fontSize: 18,
      borderWidth: undefined,
      disabled: {},
    },
    hollow: {
      color: 'transparent',
      height: 44,
      textColor: undefined,
      fontFamily: 'Nunito',
      fontSize: 18,
      borderWidth: 1,
      disabled: {},
    },
    bigHollow: {
      color: 'transparent',
      height: 52,
      textColor: undefined,
      fontFamily: 'Nunito',
      fontSize: 18,
      borderWidth: 1,
      disabled: {},
    },
    text: {
      color: 'transparent',
      height: 44,
      textColor: palette.linkBlue,
      fontFamily: 'Nunito',
      fontSize: 18,
      borderWidth: undefined,
      disabled: {},
    },
    subduedText: {
      color: 'transparent',
      height: 44,
      textColor: palette.bodySubdued,
      fontFamily: 'Nunito',
      fontSize: 18,
      borderWidth: undefined,
      disabled: {},
    },
  },
};

const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    mainBackground: palette.black,
    overlayBackground: palette.bodyBlack,
    infoBlockNeutralBackground: palette.darkGrey,
    overlayBodyText: palette.white,
    bodyTextSubdued: palette.fadedTextWhite,
  },
};

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

export type Theme = typeof theme;
export default theme;

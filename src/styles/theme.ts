import { PaletteMode } from '@mui/material';
import { colors } from './variables';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          background: {
            default: colors.light.background,
          },
          text: {
            primary: colors.light.text,
            secondary: colors.light.subtitles,
          },
          primary: {
            main: '#1E1F27',
          },
          secondary: {
            main: '#1E1F27',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#FFFFFF',
          },
          secondary: {
            main: '#FFFFFF',
          },
          background: {
            default: colors.dark.background,
          },
          text: {
            primary: colors.light.text,
            secondary: colors.light.subtitles,
          },
        }),
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 12,
    h6: {
      fontSize: 20,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

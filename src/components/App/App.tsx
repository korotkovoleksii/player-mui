import { Box, PaletteMode } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import PlayerCard from '../PlayerCard/PlayerCard';

import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useMemo, useState } from 'react';
import { getDesignTokens } from '../../styles/theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = (): JSX.Element => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <PlayerCard />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;

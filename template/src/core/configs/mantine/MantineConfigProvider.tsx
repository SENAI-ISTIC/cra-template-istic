import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { PropsWithChildren } from 'react';
import theme from './theme';

const ColorSchemeContainer: React.FC<PropsWithChildren> = (props) => {
  const colorSchemeSystem = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: colorSchemeSystem,
    getInitialValueInEffect: false,
  });

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  function toggleColorScheme(value?: ColorScheme) {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ColorSchemeContainer;

import { ThemeProvider } from 'styled-components';
import { Groups } from '@screens/Groups';
import { StatusBar } from 'expo-status-bar';
import theme from '@theme/index';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


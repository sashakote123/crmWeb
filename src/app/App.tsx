import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';

import { ThemeProvider } from '@emotion/react';

import StartPage from '../pages/startPage/StartPage';
import { darkTheme, lightTheme } from '../shared/theme';
import Header from '../widgets/header/Header';
import Navigation from '../widgets/navigation/Navigation';
import { type RootState } from './store/store';

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.theme);

  return (
    <div>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

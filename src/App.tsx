import Router from 'src/routes';
// theme
import ThemeProvider from './theme';
// components
import MotionLazyContainer from './components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

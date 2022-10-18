// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function LoadingPage() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Dots />
    </Box>
  );
}

// ----------------------------------------------------------------------

function Dots() {
  const theme = useTheme();

  const dotsColor = theme.palette.primary.main;
  const dotsBgColor = theme.palette.primary.lighter;

  return (
    <Box
      sx={{
        '.dot-flashing': {
          position: 'relative',
          width: '10px',
          height: '10px',
          borderRadius: '5px',
          backgroundColor: dotsColor,
          color: dotsColor,
          animation: 'dotFlashing 1s infinite linear alternate',
          animationDelay: '0.5s',
        },
        '.dot-flashing::before, .dot-flashing::after': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          top: '0',
        },
        '.dot-flashing::before': {
          left: '-15px',
          width: '10px',
          height: '10px',
          borderRadius: '5px',
          backgroundColor: dotsColor,
          color: dotsColor,
          animation: 'dotFlashing 1s infinite alternate',
          animationDelay: '0s',
        },
        '.dot-flashing::after': {
          left: '15px',
          width: '10px',
          height: '10px',
          borderRadius: '5px',
          backgroundColor: dotsColor,
          color: dotsColor,
          animation: 'dotFlashing 1s infinite alternate',
          animationDelay: '1s',
        },
        '@keyframes dotFlashing': {
          '0%': {
            backgroundColor: dotsColor,
          },
          '50%': {},
          '100%': {
            backgroundColor: dotsBgColor,
          },
        },
      }}
    >
      {/* <div className="dot-flashing" /> */}
    </Box>
  );
}

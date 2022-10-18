import { ReactNode } from 'react';
// mui
import { Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface Props {
  children: ReactNode;
}

// ----------------------------------------------------------------------

export default function Background({ children }: Props) {
  const theme = useTheme();

  const opacity = 0.1;

  return (
    <Box
      sx={{
        background: `linear-gradient(
          -45deg,
          ${alpha(theme.palette.primary.dark, opacity)} 0%,
          ${alpha(theme.palette.primary.main, opacity)} 25%,
          ${alpha(theme.palette.primary.main, opacity)} 50%,
          ${alpha(theme.palette.primary.dark, opacity)} 100%
        )`,
      }}
    >
      {children}
    </Box>
  );
}

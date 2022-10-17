import { Outlet } from 'react-router-dom';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// mui
import { Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
// sections
import MainSocial from './sections/MainSocial';
import MainFooter from './sections/MainFooter';

// ----------------------------------------------------------------------

export default function Main() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        background: `linear-gradient(
        -45deg, 
        ${alpha(theme.palette.primary.darker, 0.06)} 0%, 
        ${alpha(theme.palette.primary.main, 0.06)} 25%, 
        ${alpha(theme.palette.primary.light, 0.06)} 50%, 
        ${alpha(theme.palette.primary.dark, 0.06)} 100%
      )`,
      }}
    >
      {mdUp && <MainSocial />}

      <Outlet />

      {!mdUp && <MainFooter />}
    </Box>
  );
}

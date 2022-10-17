// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// hooks
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function HomeProfile() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  const P_SIZE = mdUp ? 280 : 200;

  return (
    <Box
      sx={{
        height: P_SIZE,
        width: P_SIZE,
        position: 'relative',
        '&:hover img': { transform: 'scale(1.03)' },
        '&:hover #profileBorder': { transform: 'translate(+1%, -1%)' },
      }}
    >
      <Box
        id="profileBorder"
        sx={{
          mt: 1.5,
          top: 0,
          position: 'absolute',
          height: P_SIZE,
          width: P_SIZE,
          border: 1,
          borderWidth: 1,
          borderRadius: 3,
          borderColor: theme.palette.primary.dark,
          transition: 'all .3s ease',
        }}
      />

      <Box
        sx={{
          ml: 1.5,
          top: 0,
          position: 'absolute',
          height: P_SIZE,
          width: P_SIZE,
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <img
          src="assets/profile.jpg"
          alt="Foto de perfil"
          style={{ height: '100%', width: '100%', transition: 'all .3s ease' }}
        />
      </Box>
    </Box>
  );
}

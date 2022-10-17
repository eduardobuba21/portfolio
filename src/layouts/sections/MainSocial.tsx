// mui
import { Box, Link, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// utils
import { SOCIAL } from './social';

// ----------------------------------------------------------------------

export default function MainSocial() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        zIndex: 10,
        position: 'fixed',
        width: 40,
        bottom: 0,
        left: 40,
        right: 'auto',
        color: theme.palette.primary.main,
      }}
    >
      <Stack spacing={3} alignItems="center">
        {SOCIAL.map((item) => (
          <Box
            key={item.id}
            component={Link}
            href={item.link}
            target="_blank"
            sx={{
              cursor: 'pointer',
              transition: 'all .2s ease',
              '&:hover': {
                color: theme.palette.primary.light,
                transform: 'translate(0, -10%)',
              },
            }}
          >
            <item.Icon fontSize="small" />
          </Box>
        ))}

        <Box
          sx={{
            height: '90px',
            width: '1px',
            backgroundColor: theme.palette.primary.main,
          }}
        />
      </Stack>
    </Box>
  );
}

// mui
import { Box, Link, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// utils
import { SOCIAL } from './social';

// ----------------------------------------------------------------------

export default function MainFooter() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.text.secondary,
        position: 'relative',
        p: 3,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Stack spacing={4} alignItems="center" direction="row" sx={{ pb: 2 }}>
        {SOCIAL.map((item) => (
          <Box
            key={item.id}
            component={Link}
            href={item.link}
            target="_blank"
            sx={{
              cursor: 'pointer',
              color: theme.palette.text.secondary,
              transition: 'all .2s ease',
              '&:hover': {
                color: theme.palette.primary.light,
              },
            }}
          >
            <item.Icon fontSize="small" />
          </Box>
        ))}
      </Stack>

      <Typography variant="subtitle2">Desenvolvido por Eduardo Buba</Typography>
    </Box>
  );
}

// mui
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// router
import { PATHS, PATHS_OTHER } from 'src/routes/paths';
import { Link as RouterLink } from 'react-router-dom';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import { m } from 'framer-motion';
import { MotionContainer, varFade } from 'src/components/animate';
// sections
import HomeProfile from './sections/HomeProfile';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    p: 80,
    alignItems: 'center',
  },
}));

//

const ACTIONS = [
  {
    id: 'about',
    label: 'Sobre',
    path: PATHS.about,
  },
  {
    id: 'projects',
    label: 'Projetos',
    path: PATHS.projects,
  },
];

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  return (
    <Container component={MotionContainer}>
      <ContentStyle>
        <Stack direction={mdUp ? 'row' : 'column'} spacing={6} alignItems="center">
          <Box sx={{ ml: { sm: '0', md: 'auto' }, mt: { xs: 10, md: 0 }, mb: { xs: 6, md: 0 } }}>
            <m.div variants={varFade().inLeft}>
              <HomeProfile />
            </m.div>
          </Box>

          <Box>
            <Box sx={{ mb: 3, maxWidth: 400 }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="subtitle1" color="primary">
                  Olá, meu nome é
                </Typography>
                <Typography variant={mdUp ? 'h3' : 'h4'} gutterBottom>
                  Eduardo Buba
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                  Sou um desenvolvedor web Fullstack e atualmente estou trabalhando em projetos
                  pessoais, com foco no sistema{' '}
                  <Link href={PATHS_OTHER.buba_erp} underline="none" target="_blank">
                    buba ERP
                  </Link>
                  .
                </Typography>
              </m.div>
            </Box>

            <m.div variants={varFade().inUp}>
              <Stack direction="row" spacing={1}>
                {ACTIONS.map((_action) => (
                  <Button
                    key={_action.id}
                    variant="outlined"
                    sx={{ borderRadius: 10 }}
                    component={RouterLink}
                    to={_action.path}
                  >
                    {_action.label}
                  </Button>
                ))}
              </Stack>
            </m.div>
          </Box>
        </Stack>
      </ContentStyle>
    </Container>
  );
}

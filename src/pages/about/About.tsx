// mui
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
// router
import { PATHS } from 'src/routes/paths';
import { Link as RouterLink } from 'react-router-dom';
// components
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import {
  BackIcon,
  SchoolIcon,
  BusinessIcon,
  ListItemIcon,
  ExperienceIcon,
} from 'src/components/Icons';

// ----------------------------------------------------------------------

const LIBRARIES = [
  {
    id: 'typescript',
    description: 'TypeScript',
  },
  {
    id: 'reactjs',
    description: 'ReactJS',
  },
  {
    id: 'nodejs',
    description: 'NodeJS',
  },
  {
    id: 'postgresql',
    description: 'PostgreSQL',
  },
];

// ----------------------------------------------------------------------

export default function About() {
  const theme = useTheme();

  return (
    <Container sx={{ overflow: 'hidden' }}>
      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            py: { xs: 3, md: 10 },
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              flexGrow: 1,
              p: 3,
              border: 1,
              borderRadius: 4,
              borderColor: theme.palette.divider,
              backgroundColor: alpha(theme.palette.primary.main, 0.03),
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ mb: 8 }}>
              <Button component={RouterLink} to="/" startIcon={<BackIcon />}>
                Voltar
              </Button>

              <Stack>
                <Typography variant="h5" align="center" gutterBottom>
                  Sobre
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ color: theme.palette.primary.main, mb: 1, mt: 4 }}
                >
                  <SchoolIcon />
                  <Typography variant="subtitle1" sx={{ pl: 1 }}>
                    Forma????o
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  Meu nome ?? Eduardo, tenho 22 anos e sou formado em Sistemas de Informa????o na{' '}
                  <Link href="https://www.udesc.br/" target="_blank" underline="none">
                    Universidade do Estado de Santa Catarina
                  </Link>
                  , onde tive a oportunidade de ser tamb??m monitor.
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ color: theme.palette.primary.main, mb: 1, mt: 4 }}
                >
                  <BusinessIcon />
                  <Typography variant="subtitle1" sx={{ pl: 1 }}>
                    Experi??ncia
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  No passado trabalhei (como terceiro) dando suporte a sistemas e bancos de dados
                  como o da TOTVS, que proveu-me experi??ncia com SQL que era necess??rio para o
                  desenvolvimento de relat??rios por exemplo.
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ color: theme.palette.primary.main, mb: 1, mt: 4 }}
                >
                  <ExperienceIcon />
                  <Typography variant="subtitle1" sx={{ pl: 1 }}>
                    Tecnologias
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  Hoje estou me dedicando ao desenvolvimento de aplica????es web, segue algumas
                  tecnologias que tenho experi??ncia:
                </Typography>

                <br />

                <Box
                  sx={{
                    display: 'grid',
                    rowGap: 3,
                    columnGap: 2,
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(4, 1fr)',
                      md: 'repeat(4, 1fr)',
                    },
                  }}
                >
                  {LIBRARIES.map((item) => (
                    <Stack key={item.id} color="text.secondary" direction="row">
                      <ListItemIcon sx={{ color: theme.palette.primary.main }} />
                      <Typography variant="subtitle2">{item.description}</Typography>
                    </Stack>
                  ))}
                </Box>
              </Stack>
            </Box>

            <Button
              component={RouterLink}
              to={PATHS.projects}
              sx={{ mr: { xs: 'auto', md: '0' }, ml: 'auto' }}
            >
              Conhe??a meus projetos!
            </Button>
          </Box>
        </Box>
      </m.div>
    </Container>
  );
}

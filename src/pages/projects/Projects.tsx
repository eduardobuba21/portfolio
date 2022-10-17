// mui
import { Box, Card, Link, Stack, Button, Container, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
// router
import { Link as RouterLink } from 'react-router-dom';
// components
import { m } from 'framer-motion';
import Image from 'src/components/Image';
import { varFade } from 'src/components/animate';
import { WebIcon, BackIcon, ListItemIcon } from 'src/components/Icons';

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
  {
    id: 'docker',
    description: 'Docker',
  },
  {
    id: 'gcloud',
    description: 'GCloud',
  },
  {
    id: 'cicd',
    description: 'CI/CD',
  },
];

// ----------------------------------------------------------------------

export default function Projects() {
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
              '& strong': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <Box sx={{ mb: 8 }}>
              <Button component={RouterLink} to="/" startIcon={<BackIcon />}>
                Voltar
              </Button>

              <Stack>
                <Typography variant="h5" align="center" gutterBottom>
                  Projetos
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ color: theme.palette.primary.main, mb: 1, mt: 4 }}
                >
                  <WebIcon />
                  <Typography variant="subtitle1" sx={{ pl: 1 }}>
                    buba ERP
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  Posso dizer que esse é o maior projeto que eu fiz e foi onde utilizei muitos dos
                  conhecimentos que adquiri ao longo dos anos, que juntos formaram uma aplicação
                  completa.
                </Typography>

                <Box sx={{ maxWidth: 400, m: 'auto' }}>
                  <Image
                    alt="buba ERP dashboard preview"
                    src="/assets/buba_erp_dashboard.jpg"
                    sx={{
                      mt: 3,
                      borderRadius: 1,
                      border: 1,
                      borderColor: theme.palette.divider,
                    }}
                  />
                </Box>

                <br />

                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  Foi desenvolvido tendo como alvo pequenos comércios que precisam de um maior
                  controle de suas vendas e estoque. É um sistema simples, eficiênte e acessível.
                </Typography>

                <Card sx={{ p: 3, my: 3 }} variant="outlined">
                  <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                  >
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      textAlign={{ xs: 'center', md: 'inherit' }}
                    >
                      Você pode{' '}
                      <Link href="https://www.buba.dev/" target="_blank" underline="none">
                        acessar o sistema
                      </Link>{' '}
                      agora mesmo e criar uma conta (período gratuito de 7 dias) caso queira o ver
                      em funcionamento.
                    </Typography>

                    <img src="/assets/buba_erp_logo.svg" alt="buba ERP logo" width="80px" />
                  </Stack>
                </Card>

                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  Utilizei a biblioteca de componentes visuais{' '}
                  <Link href="https://mui.com/" target="_blank" underline="none">
                    MUI Core
                  </Link>
                  , junto a um template disponível no site para agilizar o desenvolvimento do
                  frontend.
                </Typography>

                <br />

                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  O backend roda dentro de um <strong>container Docker</strong> que possíbilita,
                  dentro do servidor, utilizar VMs que apenas executam quando necessário (Cloud
                  Run). Também apliquei princípios <strong>SOLID</strong> para a melhor organização
                  e manutenção do código.
                </Typography>

                <br />

                <Typography variant="subtitle1" color="text.secondary" align="justify">
                  Tanto o frontend quanto o backend estão hospedados no GCloud, onde tenho
                  configurado rotinas de <strong>CI/CD</strong> que automatizam o processo de
                  atualizações a partir de <i>triggers</i> e <i>actions</i> no Github.
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

            <Button component={RouterLink} to="/" sx={{ mr: { xs: 'auto', md: '0' }, ml: 'auto' }}>
              Voltar ao início
            </Button>
          </Box>
        </Box>
      </m.div>
    </Container>
  );
}

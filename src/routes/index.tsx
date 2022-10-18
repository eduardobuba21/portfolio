import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// paths
import { PATHS } from 'src/routes/paths';
// layouts
import MainLayout from 'src/layouts/Main';
// components
import LoadingScreen from 'src/components/LoadingScreen';
import PageTransition from 'src/components/PageTransition';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PageTransition>
        <Component {...props} />
      </PageTransition>
    </Suspense>
  );
};

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Home />, index: true },
        { path: PATHS.about, element: <About /> },
        { path: PATHS.projects, element: <Projects /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
}

// ----------------------------------------------------------------------

const Home = Loadable(lazy(() => import('src/pages/home/Home')));
const About = Loadable(lazy(() => import('src/pages/about/About')));
const Projects = Loadable(lazy(() => import('src/pages/projects/Projects')));

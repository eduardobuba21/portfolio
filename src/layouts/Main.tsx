import { Outlet } from 'react-router-dom';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Background from 'src/components/Background';
// sections
import MainSocial from './sections/MainSocial';
import MainFooter from './sections/MainFooter';

// ----------------------------------------------------------------------

export default function Main() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Background>
      {mdUp && <MainSocial />}

      <Outlet />

      {!mdUp && <MainFooter />}
    </Background>
  );
}

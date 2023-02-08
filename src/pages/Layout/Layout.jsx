//React
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Container } from './Layout.styled';


const PageHeader = lazy(() => import('../../components/PageHeader/PageHeader'));

const Layout = () => {
  return (
    <Container>
      <Suspense>
        <PageHeader />
      </Suspense>
      <Outlet />
    </Container>
  );
};

export default Layout;
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import LoadModal from 'components/LoadModal/LoadModal';

export const Layout = () => {
  return (
    <div>
        <AppBar />

        <Suspense fallback={<LoadModal/>}>
          <Outlet />
        </Suspense>
    </div>
  );
};

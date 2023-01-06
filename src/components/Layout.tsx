import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = function () {
  return (
    <div>
      <h3>Esto es un h3 desde file Layout.tsx in folder component</h3>

      <Outlet />
    </div>
  );
};

export default Layout;

import { FC } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: FC = function () {
  const location = useLocation();
  console.log(location);
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-indigo-300  px-5 py-8">
        <h2 className="text-4xl font-black text-center text-emerald-50">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === '/' ? 'text-blue-500' : 'text-white'
            } text-2xl block mt-2 hover:text-blue-500 `}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === '/new/customer'
                ? 'text-blue-500'
                : 'text-white'
            } text-2xl block mt-2 hover:text-blue-500`}
            to="/new/customer"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

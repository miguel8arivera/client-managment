import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import Layout from './components/Layout';
import './index.css';
import CustomerPage, { loader as customerLoader } from './pages/CustomerPage';
import NewCustomerPage, {
  action as newCustomerAction,
} from './pages/NewCustomerPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CustomerPage />,
        loader: customerLoader,
      },
      {
        path: 'new/customer',
        element: <NewCustomerPage />,
        action: newCustomerAction,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

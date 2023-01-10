import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import Layout from './components/Layout';
import './index.css';
import CustomerPage, { loader as customerLoader } from './pages/CustomerPage';
import EditPage, {
  loader as EditCustomerLoader,
  action as EditCustomerAction,
} from './pages/EditCustomerPage';
import NewCustomerPage, {
  action as newCustomerAction,
} from './pages/NewCustomerPage';
import { action as DeleteCustomerAction } from './components/Customer';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CustomerPage />,
        loader: customerLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'new/customer',
        element: <NewCustomerPage />,
        action: newCustomerAction,
        errorElement: <ErrorPage />,
      },
      {
        path: 'customer/:customerId/edit',
        element: <EditPage />,
        loader: EditCustomerLoader,
        action: EditCustomerAction,
        errorElement: <ErrorPage />,
      },
      {
        path: 'customer/:customerId/destroy',
        action: DeleteCustomerAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

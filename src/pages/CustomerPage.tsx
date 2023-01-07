import { FC } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Customer from '../components/Customer';
import { customers } from '../data/customers';

export function loader() {
  return customers;
}

type PropCliente = {
  id: number;
  name: string;
  email: string;
  company: string;
};

const CustomerPage: FC = function () {
  const dataCustomers: PropCliente[] = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="font-black text-4xl text-blue-900"> Customers</h2>
      <p className="mt-4">Custumers Managment</p>
      <div className="flex justify-end py-4">
        <button
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
          onClick={() => navigate('/new/customer')}
        >
          Add Customer
        </button>
      </div>
      {dataCustomers.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-2">Customer</th>
              <th className="p-2">Infomation</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataCustomers.map((customer) => (
              <Customer key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      ) : (
        <p> No hay clientes</p>
      )}
    </div>
  );
};

export default CustomerPage;

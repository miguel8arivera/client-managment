import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
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

  return (
    <div>
      <h2 className="font-black text-4xl text-blue-900"> Customers</h2>
      <p className="mt-4">Custumers Managment</p>
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

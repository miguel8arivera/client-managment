import { FC } from 'react';
import { deleteCustomer } from '../data/customers';

import { TfiEmail } from 'react-icons/tfi';
import { GiSmartphone } from 'react-icons/gi';
import { Form, redirect, useNavigate } from 'react-router-dom';

export async function action({ params }) {
  await deleteCustomer(params.customerId);
  return redirect('/');
}

const Customer: FC = function ({ customer }) {
  const navigate = useNavigate();
  const { name, company, email, id, phone } = customer;
  return (
    <tr className="border-b" key={id}>
      <td className="p-6 text-center">
        <p className="text-1xl text-gray-800 font-semibold">{name}</p>
      </td>
      <td className="p-6 text-center">
        <p className="text-gray-600 mb-2 ">
          <span className=" flex flex-row justify-center  text-gray-800  font-semibold">
            <TfiEmail className="mr-2 mt-1" /> {email}
          </span>
        </p>
        <p className="text-gray-600 ">
          <span className="flex flex-row justify-center text-gray-800 uppercase font-semibold">
            <GiSmartphone className="mr-2 mt-1" /> {phone}
          </span>
        </p>
      </td>
      <td className="p-6 flex gap-6  justify-center">
        <button
          type="button"
          className="bg-blue-700 text-white rounded-md p-3 hover:text-blue-800 uppercase font-semibold text-xs "
          onClick={() => navigate(`/customer/${id}/edit`)}
        >
          Edit
        </button>

        <Form
          method="post"
          action={`/customer/${id}/destroy`}
          onSubmit={(e) => {
            if (!confirm('Are you sure you want to delete this customer?')) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="  rounded-md bg-red-600 text-white hover:text-red-800 uppercase font-semibold text-xs p-3 "
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Customer;

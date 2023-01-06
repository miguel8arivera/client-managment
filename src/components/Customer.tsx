import { FC } from 'react';

const Customer: FC = function ({ customer }) {
  const { name, company, email, id, phone } = customer;
  return (
    <tr className="border-b" key={id}>
      <td className="p-6 text-center">
        <p className="text-1xl text-gray-800 font-semibold">{name}</p>
      </td>
      <td className="p-6 text-center">
        <p className="text-gray-600 ">
          {' '}
          <span className="text-gray-800  font-semibold">{email}</span>
        </p>
        <p className="text-gray-600 ">
          {' '}
          <span className="text-gray-800 uppercase font-semibold">{phone}</span>
        </p>
      </td>
      <td className="p-6 flex gap-4 ">
        <button
          type="button"
          className="text-blue-700 hover:text-blue-800 uppercase font-semibold text-xs "
        >
          Edit
        </button>
        <button
          type="button"
          className="text-red-700 hover:text-red-800 uppercase font-semibold text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Customer;

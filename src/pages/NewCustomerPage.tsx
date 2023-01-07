import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NewCustomerPage: FC = function () {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="font-black text-4xl text-blue-900">New Customers</h2>
      <p className="mt-4">Add a new customer</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 font-bold uppercase hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => navigate('/')}
        >
          Return to
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-4/4 max-auto px-5 py-10">
        <p className="text-center font-bold text-blue-900 uppercase">
          Register Customer
        </p>
      </div>
    </div>
  );
};

export default NewCustomerPage;

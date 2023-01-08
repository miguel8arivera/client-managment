import { FC } from 'react';

const CustomerPageForm: FC = function () {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
          name="name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Company:
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="company"
          type="text"
          placeholder="company"
          name="company"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          E-mail:
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="name12@gmail.com"
          name="email"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Phone:
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="+54 9 11 1234-5678"
          name="ph"
        />
      </div>
      <div className="flex justify-center ">
        <button className="bg-indigo-600 p-2 font-bold uppercase text-white hover:bg-blue-700 w-full rounded-md">
          Register
        </button>
      </div>
    </>
  );
};

export default CustomerPageForm;

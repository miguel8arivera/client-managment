import { FC } from 'react';
import { useNavigate, Form, useActionData } from 'react-router-dom';
import CustomerPageForm from '../components/CustomerPageForm';
import ErrorValidationForm from '../components/ErrorValidationForm';

interface MiRequest {
  method: string;
  url: string;
  headers: Record<string, string>;
  body: string;
  formData: () => Promise<FormData>;
}

export async function action({ request: request }: { request: MiRequest }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const email = formData.get('email');

  const errores = [];
  if (Object.values(data).includes('')) {
    errores.push('All fileds are required !!');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push('Email is not valid !!');
  }

  if (Object.keys(errores).length > 0) {
    return errores;
  }
}

const NewCustomerPage: FC = function () {
  const errores = useActionData();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="font-black text-4xl text-blue-900">New Customers</h2>
      <p className="mt-4">Add a new customer with all required fields</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 font-bold uppercase hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => navigate(-1)}
        >
          Return to
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-4/4  mx-auto px-5 py-10 mt-5 ">
        <p className="text-center font-bold text-blue-900 uppercase">
          Register Customer
        </p>

        {errores?.length &&
          errores.map((error, i) => (
            <ErrorValidationForm key={i}>{error}</ErrorValidationForm>
          ))}

        <Form method="post" noValidate>
          <CustomerPageForm />
          <input
            type="submit"
            className="bg-blue-700 p-2 font-bold uppercase text-lg text-white hover:bg-blue-600 w-full rounded-md cursor-pointer"
            value="Register"
          />
        </Form>
      </div>
      <div className="flex justify-center p-6"></div>
    </div>
  );
};

export default NewCustomerPage;

// na na na tonight we gonna get on the floor  music

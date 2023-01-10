import { FC } from 'react';
import { Form, useNavigate, useLoaderData, redirect } from 'react-router-dom';
import CustomerPageForm from '../components/CustomerPageForm';
import { getCustomer, updateCustomer } from '../data/customers';

export async function loader({ params }: { params: number }) {
  const customer = await getCustomer(params.customerId);
  if (Object.values(customer).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hay nada',
    });
  }
  return customer;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
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
  await updateCustomer(params.customerId, data);
  return redirect('/');
}

export const EditCustomerPage: FC = function () {
  const customer = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="font-black text-4xl text-blue-900">Edit Customer</h2>
      <p className="mt-4">Please fill in the fields to be changed</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 font-bold uppercase hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-4/4  mx-auto px-5 py-10 mt-5 ">
        <p className="text-center font-bold text-blue-900 uppercase">
          Editing Customer ...
        </p>

        {/*  {errores?.length &&
          errores.map((error, i) => (
            <ErrorValidationForm key={i}>{error}</ErrorValidationForm>
          ))} */}

        <Form method="post" noValidate>
          <CustomerPageForm customer={customer} />
          <input
            type="submit"
            className="bg-blue-700 p-2 font-bold uppercase text-lg text-white hover:bg-blue-600 w-full rounded-md cursor-pointer"
            value="Done"
          />
        </Form>
      </div>
      <div className="flex justify-center p-6"></div>
    </div>
  );
};

export default EditCustomerPage;

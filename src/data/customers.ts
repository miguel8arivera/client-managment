export async function getCustomers() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const data = await res.json();
  return data;
}

export type PropCustomer = {
  id: number;
  name: string;
  phone: number;
  email: string;
  company: string;
};

export const customers: PropCustomer[] = [
  {
    id: 1,
    name: 'Juan',
    phone: 102013313,
    email: 'juan@juan.com',
    company: 'Codigo Con Juan',
  },
  {
    id: 2,
    name: 'Karen',
    phone: 138198313,
    email: 'karen@juan.com',
    company: 'Codigo Con Juan',
  },
  {
    id: 3,
    name: 'Josue',
    phone: 31983913,
    email: 'josue@juan.com',
    company: 'Codigo Con Juan',
  },
  {
    id: 4,
    name: 'Miguel',
    phone: 319381983,
    email: 'miguel@juan.com',
    company: 'Codigo Con Juan',
  },
  {
    id: 5,
    name: 'Pedro',
    phone: 1398198938,
    email: 'pedro@juan.com',
    company: 'Codigo Con Juan',
  },
];

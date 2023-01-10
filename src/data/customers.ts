export async function getCustomers() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const data = await res.json();
  return data;
}

export async function addCustomer(data) {
  console.log(data);
}

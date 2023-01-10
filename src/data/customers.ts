export async function getCustomers() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const data = await res.json();
  return data;
}

export async function getCustomer(id) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const data = await res.json();
  return data;
}

export async function addCustomer(data) {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateCustomer(id, data) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomer(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
}

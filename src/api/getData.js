export async function getData(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

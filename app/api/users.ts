export const getUsers = async (offset: number, limit: number = 10) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/users?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users", error);
    return [];
  }
};

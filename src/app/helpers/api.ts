export async function get(endpoint: string): Promise<any> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_API_BASE_URL}${endpoint}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return await response.json();
}

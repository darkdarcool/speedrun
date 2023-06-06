export default async function get<T>(url: string, apiKey?: string): Promise<T> {
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  if (apiKey) {
    headers.set('X-API-Key', apiKey);
  }

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json() as T;
}
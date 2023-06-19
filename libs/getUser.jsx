export default async function GetUser() {
  // get api call from users
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  // failed error
  if (!response.ok) throw new Error('failed to fetch users');

  // send data as json format
  return response.json();
}

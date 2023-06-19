import axios from 'axios';

export default async function getSingleUser(username) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);

  if (!response.data) throw new Error(`Single user problem`);

  return response.data[0];
}

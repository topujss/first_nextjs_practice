import axios from 'axios';

export default async function getUserPost(id) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  if (!response.data) throw new Error(`Post fetching error`);

  return response.data;
}

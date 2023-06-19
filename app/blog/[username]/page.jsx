import getSingleUser from '@/libs/getSingleUser';
import getUserPost from '@/libs/getUserPost';
import UserPosts from './componets/UserPosts';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export async function generateMetadata({ params }) {
  const userData = await getSingleUser(params.username);

  return {
    title: userData.name,
    description: `Welcome to ${userData.name} page`,
  };
}
export default async function page({ params }) {
  const userData = await getSingleUser(params.username);

  return (
    <>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>username: {userData.username}</p>
      <hr />
      <h2>{<Skeleton count={1} width={50} inline />} posts:</h2>
      <hr />

      <Suspense fallback={<Skeleton count={20} />}>
        <UserPosts promise={getUserPost(userData.id)} />
      </Suspense>
    </>
  );
}

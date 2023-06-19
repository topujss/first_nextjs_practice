import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default async function UserPosts({ promise }) {
  const posts = await promise;
  return (
    <ul>
      {posts.map((post, i) => {
        return (
          <li style={{ marginBottom: `10px` }} key={i}>
            <h2>title: {post.title}</h2>
            <p>{<Skeleton width={`100vw`} inline />}</p>
          </li>
        );
      })}
    </ul>
  );
}

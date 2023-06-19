import GetUser from '@/libs/getUser';
import Link from 'next/link';

export const metadata = {
  title: 'my blog post',
  description: 'Where is us heading to',
};

export default async function Blog() {
  const user = await GetUser();

  return (
    <>
      <h1>Our developers</h1>
      {user.map((item, index) => {
        return (
          <div className="user_box" key={index}>
            <h1>
              <Link href={`/blog/${item.username}`}>{item.name}</Link>
              <i>{item.username}</i>
            </h1>
            <p>Email: {item.email}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

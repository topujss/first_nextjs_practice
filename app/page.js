import Image from 'next/image';
import 'react-loading-skeleton/dist/skeleton.css';
import nature from '@/public/nature.jpg';

export const metadata = {
  title: 'Ai home page',
  description: 'All about ai',
};

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <Image
        src={`https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80`}
        width={500}
        height={300}
      />
    </>
  );
}

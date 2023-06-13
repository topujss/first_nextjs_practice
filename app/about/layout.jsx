import Link from 'next/link';
import React from 'react';

export default function layout({ children }) {
  // throw new Error('im an error');
  return (
    <>
      <h1>
        <Link href="/">about page</Link>
      </h1>
      {children}
    </>
  );
}

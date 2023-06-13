import React from 'react';

export default function SingleDev({ params }) {
  return (
    <>
      <h1>SingleDev page.</h1>
      <h2>My info</h2>
      Username: {params.username[0]} <br />
      country: {params.username[1]} <br />
      State: {params.username[2]}
    </>
  );
}

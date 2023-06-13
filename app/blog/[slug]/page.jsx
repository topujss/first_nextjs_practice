import React from 'react';

export default function page({ params }) {
  return <h1>post page - {params.slug}</h1>;
}

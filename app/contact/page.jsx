'use client';

import { useState } from 'react';
import Styles from './contact.module.scss';
import axios from 'axios';
export default function Contact() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    age: 0,
  });

  function handleInputChange(e) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await axios.post(`http://localhost:3000/api/blog`, input);

    const data = await response.data;
    console.log(data);
  }

  return (
    <>
      <div className={Styles.box}>
        <h1>Create a new contact</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" value={input.name} onChange={handleInputChange} name="name" />

          <input type="text" placeholder="email" value={input.email} onChange={handleInputChange} name="email" />

          <input type="text" placeholder="age" value={input.age} onChange={handleInputChange} name="age" />

          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}

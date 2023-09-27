'use client';
import Navbar from '@/Components/NavBar';
import { MyContext } from '@/Helper/Context';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    // console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const userName = useContext(MyContext);
  console.log(userName);
  return (
    <>
      <Navbar />
      <div className="p-12">
        <h1 className="text-2xl font-bold">This is home page</h1>

        <button
          onClick={getData}
          className=" bg-green-600 rounded text-white px-4 py-2 font-bold"
        >
          Get Data
        </button>
        <div className="p-8 bg-slate-100 mt-5">
          <ul>
            {users.map((u, idx) => {
              return (
                <li key={idx}>
                  {u.username} - <Link href={`/${u.id}`}>Explore</Link>
                  {/* {u.username} - <a href={`${u.id}`}>Explore</a> */}
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className="text-2xl font-bold mt-5">Context API</h1>
        <p>
          {userName.firstName} {userName.lastName}
        </p>
      </div>
    </>
  );
};

export default page;

'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../utils/loader';

const page = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  // console.log(id);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const notify = toast('Loading...');
  const getData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(data);
    setUser(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="text-2xl font-bold">Dynamic Routing</div>
      {loading && <Loader />}
      <div className="bg-cyan-200 p-5 mt-5">
        <h1>{user?.name}</h1>
        <h1>
          {user?.address?.street}, {user?.address?.suite},
          <br />
          {user?.address?.city}, zip - {user?.address?.zipcode}
        </h1>
        <h1>{user?.phone}</h1>
        <h1>{user?.website}</h1>
      </div>

      <button
        onClick={() => router.back()}
        className=" bg-green-600 rounded text-white px-4 py-2 font-bold mt-5"
      >
        Home
      </button>
    </>
  );
};

export default page;

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col mt-2 gap-5 items-center justify-center">
      <h1 className="text-3xl">Create an Account</h1>
      <h2 className="text-xl">Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className="w=[300px] flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          required
          className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-lg font-bold"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-lg font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-lg font-bold"
        />
        <button className="w-[300px] p-3 cursor-pointer bg-green-500 rounded font-bold">
          Register
        </button>
        {error && "Something went wrong!"}
      </form>
      <span>- OR -</span>
      <Link href="/dashboard/login" className="text-blue-700">
        Login with an existing account
      </Link>
    </div>
  );
};
export default Register;

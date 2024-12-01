"use client";
import Image from "next/image";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { updateUser } from "../_lib/actions";

function UpdateProfileForm({ children, user }) {
  const [count, setCount] = useState();

  const { fullname, email, nationality, country_flag, national_id } = user;

  return (
    <form
      action={updateUser}
      className="bg-white py-8 px-12 text-lg flex gap-6 flex-col rounded-md shadow-md"
    >
      <div className="space-y-1">
        <label className="text-gray-700 font-medium">Full name</label>
        <input
          defaultValue={fullname}
          name="fullname"
          disabled
          className="px-5 py-3 bg-gray-100 text-gray-500 w-full shadow-sm rounded-md border border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-1">
        <label className="text-gray-700 font-medium">Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-5 py-3 bg-gray-100 text-gray-500 w-full shadow-sm rounded-md border border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          placeholder="Your email address"
        />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality" className="text-gray-700 font-medium">
            Where are you from?
          </label>
          <Image
            src={country_flag}
            alt="Country flag"
            width={24}
            height={16}
            className="h-6 rounded-md shadow-sm border border-gray-300"
          />
        </div>
        {children}
      </div>

      <div className="space-y-1">
        <label htmlFor="national_id" className="text-gray-700 font-medium">
          National ID number
        </label>
        <input
          defaultValue={national_id}
          name="national_id"
          className="px-5 py-3 bg-gray-100 text-gray-700 w-full shadow-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
          placeholder="Enter your national ID number"
        />
      </div>

      <div className="flex justify-end items-center gap-4 mt-4">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button className="btn-form" disabled={pending}>
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}

export default UpdateProfileForm;

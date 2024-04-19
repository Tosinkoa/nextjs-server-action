"use client";
import { addUser } from "@/actions/formActions";
import Button from "./Button";
import { useRef } from "react";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addUser(formData);
        ref.current?.reset();
      }}
      className="fixed border p-3 flex rounded-md flex-col gap-y-2 bg-gradient-to-tr from-green-700 to-yellow-600 h-[200px]"
    >
      <p className="font-bold text-lg">Enter Details</p>

      <input
        name="name"
        placeholder="Enter your name..."
        className="border bg-inherit p-2 rounded-md h-10 bg-slate-50 border-black text-black"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Enter your email..."
        className="border bg-inherit p-2 rounded-md h-10 bg-slate-50 border-black  text-black"
        required
      />
      <Button />
    </form>
  );
};

export default Form;

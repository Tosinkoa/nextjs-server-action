"use client";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button className="flex ml-auto bg-blue-700 p-2 py-1 w-20 place-content-center rounded-md border-white border">
      {pending ? "Adding..." : "Submit"}
    </button>
  );
};

export default Button;

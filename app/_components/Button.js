"use client";
import { useFormStatus } from "react-dom";
export default function Button({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button className="btn-form" disabled={pending}>
      {pending ? pendingLabel : children}
    </button>
  );
}

import { FaSignOutAlt } from "react-icons/fa";

import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button
      className="py-3 px-5 hover:bg-primary-700 rounded-md hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-700 w-full"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <FaSignOutAlt className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;

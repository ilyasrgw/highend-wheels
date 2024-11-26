import { FaSignOutAlt } from "react-icons/fa";

function SignOutButton() {
  return (
    <button className="py-3 px-5 hover:bg-primary-700 rounded-sm hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-700 w-full">
      <FaSignOutAlt className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;

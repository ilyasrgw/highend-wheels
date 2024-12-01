import Link from "next/link";

function LoginMessage() {
  return (
    <div className="lg:grid bg-primary-800 rounded-md lg:px-4  md:flex md:flex-col max-w-full sm:max-w-lg  ">
      <p className="text-center text-xl py-12 self-center text-primary-50">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> car right now
      </p>
    </div>
  );
}

export default LoginMessage;

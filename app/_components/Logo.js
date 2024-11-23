import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="70" width="70" alt="HighEnd Wheels Logo" /> */}
      <span className="text-2xl font-semibold text-primary-700 drop-shadow-md hover:text-accent-400 transition-colors ">
        HighEnd Wheels
      </span>
    </Link>
  );
}

export default Logo;

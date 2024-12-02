import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/app/_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  return (
    <nav className="z-10 text-2xl text-primary-700 drop-shadow-md">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cars"
            className="hover:text-accent-400 transition-colors"
          >
            Cars
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href="/account"
              className="flex items-center gap-4 hover:text-accent-400"
            >
              <Image
                width={32}
                height={32}
                src={session.user.image || "/default-avatar.png"}
                alt={`${session.user.name}'s avatar`}
                className="w-8 h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>{session.user.name}</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

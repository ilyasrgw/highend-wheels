import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await getServerSession(authOptions);
  console.log(session);

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
              <img
                src={session.user.avatar || "/default-avatar.png"}
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

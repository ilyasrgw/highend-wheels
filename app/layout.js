import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
console.log(poppins);

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  // title: "HighEnd Wheels",
  title: {
    template: "%s / HighEnd Wheels",
    default: "Welcome / HighEnd Wheels",
  },
  description: "Luxurious cars rental service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}
          bg-neutral-50 text-primary-500 min-h-screen flex flex-col relative"
        `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className=" mx-auto max-w-7xl w-full">{children}</main>
        </div>
        <footer className="bg-primary-900 text-primary-50 py-4">
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-500 transition-colors"
              aria-label="Telegram"
            >
              <i className="text-2xl">
                <FaTelegramPlane />
              </i>
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-500 transition-colors"
              aria-label="Youtube"
            >
              <i className="text-2xl">
                <FaYoutube />
              </i>
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="text-2xl">
                <FaInstagram />
              </i>
            </a>
            <a
              href="https://www.tiktok.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-50 hover:text-accent-500 transition-colors"
              aria-label="TikTok"
            >
              <i className="text-2xl">
                <FaTiktok />
              </i>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

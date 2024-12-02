import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
console.log(poppins);

import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import ChatBot from "./_components/ChatBot";
import Tidio from "./_components/Tidio";

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
          <main className=" mx-auto max-w-7xl w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <Tidio />
        <Footer />
      </body>
    </html>
  );
}

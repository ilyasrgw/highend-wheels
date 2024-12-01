import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

export default function Header() {
  return (
    <header className="transition-all   px-8 py-5 ">
      <div className="flex justify-between  max-w-8xl items-center mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

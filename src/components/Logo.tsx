import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-3 group">
      <span className="sr-only">FTC 11138 Robo Eclipse home</span>
      <img
        src={logo}
        alt="Robo Eclipse logo"
        className="h-15 w-15 rounded-xl bg-black/70 transition group-hover:scale-[1.02]"
      />
      <span className="flex flex-col leading-tight text-white">
        <span className="text-xl font-black tracking-tight">Robo Eclipse</span>
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-red-300">
          Team 11138
        </span>
      </span>
    </Link>
  );
}

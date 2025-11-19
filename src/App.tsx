import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <ScrollToTop />
      <ScrollReveal />
      {/* Global background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-black via-zinc-950 to-[#160101]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),_transparent_60%)]" />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 text-white">
      <div className="container-std py-10 text-sm text-gray-400 text-center space-y-2">
        <p>
          FTC 11138 Robo Eclipse • Bellevue, Washington • ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

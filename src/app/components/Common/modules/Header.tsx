import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-black border-b-4 border-purple-700 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-3xl tracking-wide text-white drop-shadow-md font-star">
          CC0 <span className="text-cyan-400">WEB3 FASHION</span>
        </div>
        <nav className="space-x-4 text-sm font-semibold">
          <a href="#" className="text-purple-300 hover:text-white">
            HOME
          </a>
          <a href="#" className="text-purple-300 hover:text-white">
            MOVIES
          </a>
          <a href="#" className="text-purple-300 hover:text-white">
            PUBLICATIONS
          </a>
          <a href="#" className="text-purple-300 hover:text-white">
            FANS
          </a>
          <a href="#" className="text-purple-300 hover:text-white">
            GAMES
          </a>
          <a href="#" className="text-purple-300 hover:text-white">
            MERCH
          </a>
        </nav>
      </div>
    </header>
  );
};

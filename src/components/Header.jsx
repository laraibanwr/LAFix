import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-[#2a2a2a] shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
      <div className="h-16 flex items-center justify-center">
        <span className="font-bebas text-3xl tracking-widest">
          <span className="text-lafred">LA</span>
          <span className="text-white">Flix</span>
        </span>
      </div>
    </header>
  );
};

export default Header;

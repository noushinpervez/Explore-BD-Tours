'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border border-b-border">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Hamburger Icon */ }
          <div className="block lg:hidden">
            <button
              className="p-2 transition hover:text-black"
              onClick={ toggleMenu }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo */ }
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                className="w-auto h-12"
                src="/logo_v2.png"
                alt="Logo"
                sizes="100vw"
                width={ 0 }
                height={ 0 }
              />
            </Link>
          </div>

          {/* Desktop Menu */ }
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-16 text-sm font-bold">
                <li>
                  <Link className={ `transition ${pathname === '/' ? 'text-primary' : ''}` } href="/">Home</Link>
                </li>
                <li>
                  <Link className={ `transition ${pathname === '/about' ? 'text-primary' : ''}` } href="/about">About</Link>
                </li>
                <li>
                  <Link className={ `transition ${pathname === '/bdtours' ? 'text-primary' : ''}` } href="/bdtours">Bangladesh Tours</Link>
                </li>
                <li>
                  <Link className={ `transition ${pathname === '/contact' ? 'text-primary' : ''}` } href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:w-1/5"></div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */ }
      <div
        ref={ menuRef }
        className={ `fixed inset-y-0 left-0 z-50 w-full max-w-80 bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden` }
      >
        <div className="px-4 flex bg-background h-12">
          <button
            className="hover:text-black"
            onClick={ toggleMenu }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 100 100"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657 c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824 c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723 C33.234,53.39,33.446,54.017,33.934,54.458z" />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-4 uppercase">
          <ul className="text-sm font-bold">
            <li className="py-4 border-b border-border">
              <Link className={ `transition ${pathname === '/' ? 'text-primary' : ''}` } href="/">Home</Link>
            </li>
            <li className="py-4 border-b border-border">
              <Link className={ `transition ${pathname === '/about' ? 'text-primary' : ''}` } href="/about">About</Link>
            </li>
            <li className="py-4 border-b border-border">
              <Link className={ `transition ${pathname === '/bdtours' ? 'text-primary' : ''}` } href="/bdtours">Bangladesh Tours</Link>
            </li>
            <li className="py-4 border-b border-border">
              <Link className={ `transition ${pathname === '/contact' ? 'text-primary' : ''}` } href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
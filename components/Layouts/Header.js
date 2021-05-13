import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="">
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end items-end py-6 md:space-x-10">
            <nav className="flex space-x-4 md:space-x-10">
              <Link href="/about">
                <a className="inline-flex items-end text-green text-sm md:text-base">ABOUT</a>
              </Link>
              <Link href="/project">
                <a className="inline-flex items-end text-green text-sm md:text-base">PROJECT</a>
              </Link>
              <Link href="/contact">
                <a className="inline-flex items-end text-green text-sm md:text-base">CONTACT</a>
              </Link>
            </nav>
            <Link href="/">
              <a className="pl-6">
                <img className="h-10 w-auto sm:h-20" src="/images/logo.png" alt="logo" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

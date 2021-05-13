import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <img src="/images/logo-footer.png" alt="logo footer" className="w-20" />
          <div className="flex items-center justify-end h-full">
            <p className="text-green">Copyright © 2021 Kaistudio.vn</p>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="/images/icon_fb.png" alt="facebook" className="ml-2 w-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

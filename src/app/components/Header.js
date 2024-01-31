'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <div className="desktop-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-2">
              <Link href="/">
                <Image src="/img/logo.svg" alt="logo" width={139} height={32} />
              </Link>
            </div>
            <div className="col-md-8">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/examples">Examples</Link>
                  </li>
                  <li>
                    <Link href="/integrations">Integrations</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 text-end">
              <Link href="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <Link href="/">
          <Image src="/img/logo.svg" alt="logo" width={139} height={32} />
        </Link>
        <span className="mobile-menu-open-icon" onClick={toggleMobileMenu}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                d="M12 17H19M5 12H19M5 7H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
          <strong className="mobile-menu-close-icon" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </strong>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/examples">Examples</Link>
              </li>
              <li>
                <Link href="/integrations">Integrations</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import React from 'react';
import Chat from './Chat';

export default function Hero() {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">
              Your custom  <br />
              <span>AI Solutions</span>
              <br /> Partner.
            </h1>
            <p className="mx-850 text-center">
            We deliver Machine learning Solutions for Your every Need.
            </p>
            <div className="hero-btn">
              <Link href="/contact" className="btn btn-primary">
                Contact us.
              </Link>
              {/* <Link href="/pricing" className="btn btn-tertiary">
                View Pricing
              </Link> */}
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

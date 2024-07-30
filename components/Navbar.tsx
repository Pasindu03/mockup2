import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {NAV_LINKS} from "@/constants";
import Button from './Button';

const Navbar = () => {
  return (
      <nav className="nav flexBetween max-container padding-container relative z-50 py-5">
          <div className="flex items-center">
              <Link href="/">
                  <Image src="/dflix-logo-large.png" alt="logo" width={86} height={34}/>
              </Link>
          </div>

          <ul className="hidden h-full gap-12 lg:flex">
              {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                      <Link href={link.href} legacyBehavior>
                          <a className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                              {link.label}
                          </a>
                      </Link>
                  </li>
              ))}
          </ul>

          <div className="lg:flexCenter hidden">
              <Button/>
          </div>
      </nav>
  );
};

export default Navbar;

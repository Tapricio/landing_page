"use client";
import { navLinks } from "@/constant/Constrant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import Logo from "@/constant/Logo";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-full transition-all duration-200 h-[12vh] z-[1000] fixed">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 defaultClickeableButton rounded-full">
            Únete!
          </button>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

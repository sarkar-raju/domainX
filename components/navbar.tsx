"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import NextLink from "next/link";
import clsx from "clsx";

import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const NavbarCmp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <Navbar
      isBordered
      ref={ref}
      className={clsx({
        "z-[100001]": isMenuOpen,
      })}
      isMenuOpen={isMenuOpen}
     
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <NextLink href="/">
            <Image src="/logo.png" width={68} height={10} alt="logo" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <NextLink href="/">
            <Image src="/logo.png" width={68} height={10} alt="logo" />
          </NextLink>
        </NavbarBrand>
        <ul className="sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
             
                
                color="foreground"
                href="#"
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end" >
      
        <NavbarItem>
          <Button
            className="bg-blue-500 text-white font-bold rounded-full text-[15px] mr-3"
            as={Link}
            href="/contact"
          >
            Get Started
          </Button>
          <Button
            className="bg-slate-100 text-black font-bold rounded-full text-[15px] hover:bg-yellow-50"
            as={Link}
            href="/contact"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
              color="foreground"
                
                href="#"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
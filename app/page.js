"use client"

import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <header className="flex flex-row justify-between items-center">
        <div className="flex items-end">
          <Image
            src="/logo.png"
            alt="AT Digital"
            width={36.11}
            height={36.11}
            className=" mr-3"
          />
          <Image
            src="/logo-text.svg"
            alt="AT Digital"
            width={140}
            height={25}
          />
        </div>
        <nav className="flex items-end gap-7 pt-3">
          <a href="" className="text-sm text-white">
            SERVICES
          </a>
          <a href="" className="text-sm text-white">
            ABOUT US
          </a>
          <a href="" className="text-sm text-white">
            CONTACT US
          </a>
          <a href="" className="text-sm text-white">
            CAREERS
          </a>
        </nav>
        <Image src="/menu.svg" alt="menu" width={31} height={31} className="menu-icon mt-3" onClick={() => setIsOpen(true)} />
      </header>
      <section className="hero-section bg-hero bg-cover bg-left-bottom">
        <div className="hero absolute h-700 ">
          <h1 className=" text-5xl text-white">We Crush Your competitors, Goals, And Sales Records - Without The B.S.</h1>
          <Button text='GET FREE CONSULTATION' />
        </div>
      </section>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}

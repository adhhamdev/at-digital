"use client";

import { Poppins } from "next/font/google";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
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
        <Image
          src="/menu.svg"
          alt="menu"
          width={31}
          height={31}
          className="menu-icon mt-3"
          onClick={() => setIsOpen(true)}
        />
      </header>
      <section className="hero-section bg-hero bg-cover bg-left-bottom">
        <div className="hero absolute h-700 ">
          <h1 className=" text-5xl text-white">
            We Crush Your competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <Button text="GET FREE CONSULTATION" />
        </div>
      </section>
      <section className=" mx-48 my-20 flex justify-center items-center">
        <Image
          src="/computer.png"
          alt="hero"
          width={414}
          height={414}
          className=" mr-28"
        />
        <div className="service-text">
          <h2 className={`text-2xl ${poppins.className}`}>Web & Mobile App Development</h2>
          <p className=" text-base mt-5 mb-2">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <Button text="LEARN MORE" />
        </div>
      </section>
      <section className="service my-20 flex justify-center items-center">
        <Image
          src="/computer.png"
          alt="hero"
          width={414}
          height={414}
          className="service-image"
        />
        <div className="service-text">
          <h2 className={`text-2xl ${poppins.className}`}>Web & Mobile App Development</h2>
          <p className=" text-base mt-5 mb-2">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <Button text="LEARN MORE" />
        </div>
      </section>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}

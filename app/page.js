"use client";

import { Poppins } from "next/font/google";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "@/components/FAQItem";
import Logo from "@/components/Logo";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <header className="flex flex-row justify-between items-center">
        <div>
          <Logo />
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
      <section className="service my-20 flex justify-center items-center">
        <Image
          src="/computer.png"
          alt="hero"
          width={414}
          height={414}
          className="service-image-1"
        />
        <div className="service-text">
          <h2 className={`text-2xl ${poppins.className}`}>
            Web & Mobile App Development
          </h2>
          <p className=" text-base mt-5 mb-2">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button text="LEARN MORE" />
        </div>
      </section>
      <section className="service service-2 my-20 flex justify-center items-center">
        <div className="service-text">
          <h2 className={`text-2xl ${poppins.className}`}>
            Digital Strategy Consulting
          </h2>
          <p className=" text-base mt-5 mb-2">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <Button text="LEARN MORE" />
        </div>
        <Image
          src="/magnifier.png"
          alt="hero"
          width={346}
          height={346}
          className="service-image-2"
        />
      </section>
      <section className="faq">
        <h2 className={`text-2xl text-center mb-7 ${poppins.className}`}>
          Frequently asked questions
        </h2>
        <div className="faq-items flex flex-col">
          <FAQItem />
          <FAQItem />
          <FAQItem />
        </div>
      </section>
      <footer className="flex flex-col justify-between text-white">
        <div className="mb-10 flex justify-between flex-wrap">
          <div className="footer-company">
            <Logo />
            <p className="mt-5">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
          </div>
          <div className="footer-techs">
            <h3>Our Technologies</h3>
            <a href="">ReactJS</a>
            <a href="">Gatsby</a>
            <a href="">NextJS</a>
            <a href="">NodeJS</a>
          </div>
          <div className="footer-services">
            <h3>Our Services</h3>
            <a href="">Social Media Marketing</a>
            <a href="">Web & Mobile App Development</a>
            <a href="">Data Analytics</a>
          </div>
        </div>
        <div className="footer-bottom text-center text-sm border-t-2">
          <a href="">Privacy Poilcy</a> | <a href="">Terms & Conditions</a>
        </div>
      </footer>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}

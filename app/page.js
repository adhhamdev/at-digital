import Button from "@/components/Button";
import Image from "next/image";
export default function Home() {
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
      </header>
      <section className="hero-section bg-hero bg-cover bg-left-bottom">
        <div className="hero absolute h-700 ">
          <h1 className=" text-5xl text-white">We Crush Your competitors, Goals, And Sales Records - Without The B.S.</h1>
          <Button text='GET FREE CONSULTATION' />
        </div>
      </section>
    </main>
  );
}

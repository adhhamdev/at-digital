import Image from "next/image";

const Logo = () => {
    return (
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
    );
}

export default Logo;
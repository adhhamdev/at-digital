import Image from "next/image";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`menu w-96 py-4 px-5 absolute ${
        isOpen ? "left-0" : "-left-full"
      } top-0 bottom-0 transition-all duration-300 ease-in-out bg-white`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center ">
          <a href="" className="text-sm pl-2">
            HOME
          </a>
          <Image src="/close.png" alt="close" width={30} height={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center ">
          <a href="" className="text-sm pl-2">
            SERVICES
          </a>
        </div>
        <div className="flex justify-between items-center ">
          <a href="" className="text-sm pl-2">
            ABOUT US
          </a>
        </div>
        <div className="flex justify-between items-center ">
          <a href="" className="text-sm pl-2">
            CONTACT US
          </a>
        </div>
        <div className="flex justify-between items-center ">
          <a href="" className="text-sm pl-2">
            CAREERS
          </a>
        </div>
      </div>
      <button onClick={() => setIsOpen(false)}></button>
    </div>
  );
};

export default Menu;

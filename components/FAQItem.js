import Image from "next/image";
import { useState } from "react";

const FAQItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${isOpen && 'open'} faq-item p-6 my-4 cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
      <h3 className={`text-xl flex justify-between items-center ${isOpen && 'mb-3'}`}>
        <span>
          Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
        </span>
        <Image
          src={isOpen ? "/minus.svg" : "/plus.svg"}
          alt=""
          width={14}
          height={28}
        />
      </h3>
      {isOpen && <p className="text-base">
        Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
        ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien
        massa morbi risus sagittis tortor integer.
      </p>}
    </div>
  );
};

export default FAQItem;

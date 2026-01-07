import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";

import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { contactInfo, navMenu } from "@/data/Data";

const contactList = [
  {
    text: contactInfo.email,
    icon: <IoIosMail />,
  },
  {
    text: contactInfo.phoneNumber,
    icon: <FaPhoneVolume />,
  },
];

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden cursor-pointer">
          <FiMenu size={25} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-white text-primary-black pb-6
         px-4 [&_button]:text-primary-black overflow-y-auto max-h-screen"
      >
        <SheetHeader></SheetHeader>
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-6">
            <Logo />
            <nav className="flex flex-col gap-4 mt-6 uppercase">
              {navMenu.map((nav, index) => {
                return (
                  <>
                    <a
                      key={index}
                      className="text-[17px] font-medium cursor-pointer"
                      href={nav.href}
                    >
                      {nav.title}
                    </a>
                    {index !== navMenu.length - 1 ? <hr /> : <></>}
                  </>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            {contactList.map((c, index) => {
              return (
                <div
                  className="flex items-center gap-2 text-primary-gray"
                  key={index}
                >
                  {c.icon}
                  <p className="text-primary-black">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;

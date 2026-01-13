import { contactInfo, navMenu, socialMedia } from "@/data/Data";
import Logo from "./header/Logo";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-primary-black text-white">
      <div
        className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-10
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-medium
        gap-10"
      >
        <Logo color="white" className="w-27" />
        {/* Information */}
        <div className="flex flex-col gap-4">
          <h1 className="text-lg">Information</h1>
          <div className="flex flex-col gap-3">
            {navMenu.map((info, index) => {
              return (
                <a
                  key={index}
                  href={info.href}
                  className=" capitalize hover:underline duration-300"
                >
                  {info.title}
                </a>
              );
            })}
          </div>
        </div>
        {/* Contacts */}
        <div className="flex flex-col gap-4">
          <h1 className="text-lg">Contacts</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <MapPin strokeWidth={1} />
              <p className=" capitalize">{contactInfo.location}</p>
            </div>
            <div className="flex gap-2">
              <PhoneCall strokeWidth={1} />
              <p className=" capitalize">{contactInfo.phoneNumber}</p>
            </div>
            <div className="flex gap-2">
              <Mail strokeWidth={1} />
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h1 className="text-lg">Social Media</h1>
          <div className="flex gap-3">
            <a href={socialMedia.instagram.link}>
              {socialMedia.instagram.icon}
            </a>
            <a href={socialMedia.x.link}>{socialMedia.x.icon}</a>
            <a href={socialMedia.linkedin.link}>{socialMedia.linkedin.icon}</a>
            <a href={socialMedia.github.link}>{socialMedia.github.icon}</a>
          </div>
        </div>
      </div>
      <hr className="border-primary-gray/20" />
      <div className="flex justify-center items-center py-6 text-primary-gray">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
}

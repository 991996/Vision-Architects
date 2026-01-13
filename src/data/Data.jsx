export const navMenu = [
  {
    title: "main",
    href: "",
  },
  {
    title: "gallery",
    href: "/gallery",
  },
  {
    title: "projects",
    href: "/projects",
  },
  {
    title: "certifications",
    href: "/certification",
  },
  {
    title: "contacts",
    href: "/contact",
  },
];

export const contactInfo = {
  email: "rkcode99@gmail.com",
  phoneNumber: "+97433820090",
  location: "Qatar,Al-Doha",
};

import {
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
export const socialMedia = {
  instagram: {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rkcode99/",
  },
  x: {
    icon: <FaXTwitter />,
    link: "https://x.com/",
  },
  github: {
    icon: <FaGithub />,
    link: "https://github.com/991996",
  },
  linkedin: {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  whatsapp: {
    icon: <FaWhatsapp />,
    link: "https://wa.me/97433820090",
  },
};

// Our Project
import project3 from "@/assets/ourProjects/building-5630441_1280.jpg";
import project2 from "@/assets/ourProjects/building-6822815_1280.jpg";
import project1 from "@/assets/ourProjects/guggenheim-museum-2707258_1280.jpg";
import project4 from "@/assets/main2.jpg";

export const ourProjectsList = [
  {
    title: "sample project 1",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: project1,
    link: "",
  },
  {
    title: "sample project 4",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: project3,
    link: "",
  },
  {
    title: "sample project 2",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: project2,
    link: "",
  },
  {
    title: "sample project 5",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: project1,
    link: "",
  },
  {
    title: "sample project 3",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: project4,
    link: "",
  },
  {
    title: "sample project 6",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: project2,
    link: "",
  },
];

// Redeploy

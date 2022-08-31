import React from "react";

export const Icons = [
  { name: "logo-facebook", link: "https://www.facebook.com/JeffsPiires" },
  { name: "logo-github", link: "https://github.com/JeeFzPiires" },
  { name: "logo-linkedin", link: "https://www.linkedin.com/in/jeferson-piires/" },
  { name: "logo-instagram", link: "https://www.instagram.com/jefpiires98/" },
];

export default function SocialIcons({ Icons }) {
  return(
    <div className="text-white">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-slate-900 mx-1.5 text-xl hover:text-[#28edf5] hover:bg-gray-700
          duration-300"
        >
          <a rel={icon.name} href={icon.link} target="_blank"><ion-icon name={icon.name}></ion-icon></a>
        </span>
      ))}
    </div>
  )
}
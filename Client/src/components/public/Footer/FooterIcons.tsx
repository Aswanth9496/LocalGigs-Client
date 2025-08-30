import type { JSX } from "react";


interface FooterIconsProps{
    label:string;
    icon:JSX.Element;
    link:string;
}


function FooterIcons({label,icon,link}:FooterIconsProps){

    return(
             <a href={link} aria-label={label} className="text-gray-500 hover:text-white transition-colors duration-200">
                 {icon}
             </a>
    )
};


export default FooterIcons;
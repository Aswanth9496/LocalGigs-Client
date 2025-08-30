import type { JSX } from "react";

interface HeroSectionFeaturesIconProps{
    text:string;
    icon?:JSX.Element;
}


function HeroSectionFeaturesIcon({text,icon}:HeroSectionFeaturesIconProps){

    return(
        <div className="flex items-center gap-2">
            {icon}{text}
        </div>
    )

};

export default HeroSectionFeaturesIcon;
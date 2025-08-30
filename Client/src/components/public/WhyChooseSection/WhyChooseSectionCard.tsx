import type { JSX } from "react";

interface CardProps{
    icon?:JSX.Element;
    title:string;
    description:string;
}



function WhyChooseSectionCard({icon,title,description}:CardProps){

    return(
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4 max-h-30">
              <span className="bg-blue-100 text-blue-500 rounded-full p-3 flex-shrink-0">
              {icon}
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
    )
};


export default WhyChooseSectionCard;
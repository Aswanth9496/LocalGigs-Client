import React from "react";

interface Props {
  icon: React.ReactNode;
  count: number;
  title: string;
  description: string;
}

const WorksManualSectionCard: React.FC<Props> = ({ icon, count, title, description }) => {
  return (
    <div className="relative w-75 bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105  group">

      {/* Step Number Badge */}
      <div className="absolute top-4 right-4 bg-orange-500 text-white w-6 h-6 flex items-center justify-center text-sm font-bold rounded-full transition-all duration-300 ">
        {count}
      </div>

      {/* Icon inside grey circle */}
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-4 rounded-full transition-colors duration-300 ">
          <div className="text-2xl text-orange-500 ">{icon}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-center text-lg font-semibold text-gray-900 mb-2 ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-center text-gray-600 text-sm ">
        {description}
      </p>
    </div>
  );
};

export default WorksManualSectionCard;

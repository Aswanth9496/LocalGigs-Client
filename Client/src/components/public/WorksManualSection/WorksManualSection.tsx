import WorksManualSectionCard from "./WorksManualSectionCard";
import { IoChatbubbleOutline, IoSearch } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";

function WorksManualSection() {
  return (
    <div className="flex items-center justify-center flex-col mb-6">
      <h1 className="mt-16 text-4xl font-black text-gray-800 mb-2">
        How LocalGigs Connect Works
      </h1>
      <p className="text-gray-600 text-lg mt-2 mb-14 text-center px-4">
        A simple 4-step process connecting local workers with job opportunities
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 max-w-7xl mx-auto px-6 mb-20 place-items-center mt-8">
        <WorksManualSectionCard
          icon={<BsPersonFillCheck />}
          count={1}
          title="Register & Verify"
          description="Create your profile as a seeker or provider. Providers get verified with Digilocker to build instant trust."
        />

        <WorksManualSectionCard
          icon={<IoSearch />}
          count={2}
          title="Post or Browse Jobs"
          description="Employers post local jobs. Workers browse opportunities on an interactive map to find nearby work."
        />

        <WorksManualSectionCard
          icon={<IoChatbubbleOutline />}
          count={3}
          title="Connect & Chat"
          description="Use our in-app chat to discuss details, agree on terms, and coordinate the work seamlessly."
        />

        <WorksManualSectionCard
          icon={<FaRegStarHalfStroke />}
          count={4}
          title="Complete & Rate"
          description="Get the job done, receive secure payment, and rate each other to build community trust."
        />
      </div>
    </div>
  );
}

export default WorksManualSection;

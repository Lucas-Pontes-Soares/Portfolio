import { Building2, Calendar } from "lucide-react";
import React from "react";
import { IconType } from "react-icons";
import { Skills } from "./Skills";

interface SkillsProps {
  name: string;
  icon: IconType;
  color: string;
  isLong: boolean;
}

interface ExperienceProps {
  title: string;
  enterprise: string;
  date: string;
  paragraphs: Array<string>;
  hardSkills: Array<SkillsProps>;
  softSkills: Array<SkillsProps>;
}

export const Experience: React.FC<ExperienceProps> = ({title, enterprise, date,paragraphs, hardSkills, softSkills}) => {
  return (
    <div className="bg-minhaCor p-4 flex flex-col items-left space-y-6 w-[90%] md:p-8 md:w-1/2 rounded-xl shadow-lg mb-20">
      <h3 className="text-white text-2xl font-bold"># {title}</h3>
      <p className="text-gray-300 text-left flex items-center">
            <Building2 className="mr-2" /> {enterprise}.
        </p>
        <p className="text-gray-300 text-left flex items-center">
            <Calendar className="mr-2" /> {date}
        </p>
      <div className="flex w-5/12 bg-minhaCor border-b-2 border-white"></div>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-300 mb-1">
          {paragraph}
        </p>
      ))}
      <div className="flex flex-wrap">
        {hardSkills.map((skill, index) => (
           <Skills isLong={false} name={skill.name} icon={skill.icon} color={skill.color} key={index}/>
        ))}
      </div>
      <div className="flex flex-wrap">
        {softSkills.map((skill, index) => (
          <Skills isLong={true} name={skill.name} icon={skill.icon} color={skill.color} key={index}/>
        ))}
      </div>
    </div>
  );
};

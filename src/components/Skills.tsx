import { IconType } from 'react-icons';

interface SkillsProps {
  name: string;
  icon: IconType;
  color: string;
  isLong: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ name, icon: Icon, color, isLong }) => {
    return isLong ? (
        <div
            className={`inline-flex items-center px-4 py-2 rounded-lg m-2 text-white ${color} cursor-pointer hover:brightness-90`}
            style={{ width: '250px'}}
        >
            <Icon size={24} className="mr-2" />
            <span className="font-medium">{name}</span>
        </div>
    ) : (
        <div
            className={`inline-flex items-center px-4 py-2 rounded-lg m-2 text-white ${color} cursor-pointer hover:brightness-90`}
            style={{ width: '150px' }}
        >
            <Icon size={24} className="mr-2" />
            <span className="font-medium">{name}</span>
        </div>
    );
};

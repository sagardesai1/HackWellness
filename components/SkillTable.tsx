import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SkillLevelData {
  skillLevel: string;
  habit: string;
}

interface SkillTableProps {
  data: SkillLevelData[];
  onSelectionChange: (selectedSkillLevel: string) => void;
}

const SkillTable: React.FC<SkillTableProps> = ({ data, onSelectionChange }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full border border-separate rounded-lg">
        <div className="bg-gray-100">
          <div className="flex">
            <div className="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Skill Level
            </div>
            <div className="px-6 py-3 w-2/3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Habit
            </div>
            <div className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Selection
            </div>
          </div>
        </div>
        <RadioGroup defaultValue="none" onValueChange={onSelectionChange}>
          {data.map((row, index) => (
            <div key={index} className="flex bg-white border-b">
              <div className="px-6 py-4 w-1/6 text-sm font-medium text-gray-900">
                {row.skillLevel}
              </div>
              <div className="px-6 py-4 w-2/3 text-sm text-gray-700">
                {row.habit}
              </div>
              <div className="px-6 py-4 w-1/6 text-center">
                <RadioGroupItem
                  id={`radio-${index}`}
                  value={row.skillLevel.toLowerCase()}
                  className="text-indigo-600 data-[state=unchecked]:border-gray-400 data-[state=checked]:border-indigo-600"
                />
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default SkillTable;

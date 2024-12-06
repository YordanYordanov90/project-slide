import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {id:string};

const AutomationsBreadCrumb = ({id}: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center justify-between ">
      <div className='flex items-center gap-x-3 min-w-0"'>
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          <p className="text-[#9B9CA0] truncate">This is automation title</p>
          <span className="cursor-pointer hover:opacity-80 duaration-100 transition flex-shrink-0">
            <PencilIcon size={16} className="text-[#9B9CA0] mr-2" />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 items-center">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate">
          All updated are automatically saved
        </p>
        <div className="flex gap-x-5 items-center">
          <p className="text-text-secondary text-sm truncate">Changes Saved</p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationsBreadCrumb;

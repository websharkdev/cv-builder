import { DWorkExperience } from "@/types/pages/data.types";
import { memo } from "react";

const PWorksItem = ({ work }: { work: DWorkExperience }) => {
    return (
        <li className="grid grid-cols-1 gap-2.5 pb-5">
            <div className="flex flex-nowrap gap-2.5 flex-col">
                <span className="text-sm font-medium text-pretty">
                    {work.company} ({work.location})
                </span>
                <span className="text-sm text-gray-600">
                    {work.title} ({work.startDate} - {work.endDate})
                </span>
            </div>
            {work.comment && (
                <span className="text-sm text-gray-600">{work.comment}</span>
            )}
            <ul className="list-disc list-outside pl-5 space-y-1.5">
                {work.achivements.map((achivement, achindex) => (
                    <li
                        key={`details-work_experience--achivement-${achivement}-${achindex}`}
                        className="text-sm text-gray-600"
                    >
                        {achivement}
                    </li>
                ))}
            </ul>
        </li>
    );
};

const PWorks = ({ data }: { data: DWorkExperience[] }) => {
    return (
        <div className="col-span-full grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
            <h3 className="text-xl font-semibold text-pretty">Work Experience:</h3>
            <ul>
                {data.map((work, index) => (
                    <PWorksItem
                        work={work}
                        key={`details-work_experience-${work.title}-${index}`}
                    />
                ))}
            </ul>
        </div>
    );
};

export default memo(PWorks);

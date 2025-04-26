import { Details, DPetProject } from "@/types/pages/data.types";
import Link from "next/link";
import { memo } from "react";

const PPetProjectItem = (project: DPetProject) => {
    return (
        <li className="grid grid-cols-1 gap-2.5">
            <div className="flex flex-nowrap gap-2.5 flex-col">
                <Link
                    href={project.link}
                    className="w-max text-sm font-medium text-pretty underline"
                >
                    {project.title}
                </Link>
                {project.code ? (
                    <div className="flex flex-nowrap gap-2.5 items-center text-sm font-medium text-pretty">
                        <span>Code:</span>
                        <Link href={project.code} className="w-max underline text-gray-600">
                            github/{project.code.split("/").pop()}
                        </Link>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm font-medium text-pretty">
                {project.achievements.map((achievement, achindex) => (
                    <li
                        key={`details-pet_projects--achievements-${achievement}-${achindex}`}
                        className="text-gray-600"
                    >
                        {achievement}
                    </li>
                ))}
            </ul>
            <div className="flex flex-nowrap gap-2.5 items-center text-sm font-medium text-pretty">
                <span>Stack:</span>
                {project.stack.map((stack, stackindex) => (
                    <span
                        key={`details-pet_projects--stack-${stack}-${stackindex}`}
                        className="text-gray-600"
                    >
                        {stack}
                    </span>
                ))}
            </div>
        </li>
    );
};

const PPetProjects = ({ data }: { data: Details["pet_projects"] }) => {
    return (
        <div className="col-span-full grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
            <h3 className="text-xl font-semibold text-pretty">Project Experience:</h3>
            <ul>
                {data.map((project, index) => (
                    <PPetProjectItem
                        {...project}
                        key={`details-pet_projects-${project.title}-${index}`}
                    />
                ))}
            </ul>
        </div>
    );
};

export default memo(PPetProjects);

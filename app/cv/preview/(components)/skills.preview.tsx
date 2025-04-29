import { Details } from "@/types/pages/data.types";
import { memo } from "react";

const PSkills = ({ skills }: { skills: Details['skills'] }) => {
    return (<ul className="space-y-2.5">
        {skills.map((skill, index) => (
            <li key={`details-skills--global-${skill.title}-${index}`} className="grid grid-cols-1 gap-2.5">
                <div className="flex items-center flex-wrap gap-1">
                    <span className="text-xs font-medium text-pretty">{skill.title}:</span>

                    {skill.items.map((item, gindex) => (
                        <span key={`details-skills--global-${skill.title}-skill_item-${gindex}`} className="text-xs text-gray-600">{item}{skill.items.length - 1 !== gindex ? ',' : ""}</span>
                    ))}</div>

                {skill.sub && skill.sub.length > 0 && (
                    <ul className="list-disc list-outside pl-5 space-y-1.5">
                        {skill.sub.map((sub, sindex) => (
                            <li key={`details-skills--global-${skill.title}-sub-skill-${sub.title}-${sindex}`} className="space-x-1">
                                <span className="text-xs font-medium text-pretty">{sub.title}:</span>
                                {sub.items.map((item, siindex) => (
                                    <span key={`details-skills--global-${skill.title}-sub-skill-${sub.title}-sub-item-skill-${item}-${siindex}`} className="text-xs text-gray-600">{item}{sub.items.length - 1 !== siindex ? ',' : ""}</span>
                                ))}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
    )
}

export default memo(PSkills)
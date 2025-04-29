import { BSection } from "@/components/custom/(block)";
import { Details } from "@/types/pages/data.types";
import { Fragment, memo } from "react";

type Props = Pick<Details, "education" | "languages">;

const PEducation = ({ education, languages }: Props) => {
    return (
        <Fragment>
            <BSection title="Education">
                <div className="grid grid-cols-1 gap-2.5 h-max">
                    <div className="flex flex-nowrap gap-2.5 flex-col">
                        <span className="text-xs font-medium text-pretty">
                            {education.university.title}
                        </span>
                        <span className="text-xs text-gray-600">
                            {education.university.degree} ({education.university.startDate} -{" "}
                            {education.university.endDate})
                        </span>
                    </div>
                </div>
            </BSection>
            <BSection title="Courses and master classes">
                <div className="grid grid-cols-1 gap-2.5">
                    {education.courses.map((course, index) => (
                        <div
                            key={`details-education--course-${course.title}-${index}`}
                            className="space-x-1"
                        >
                            <span className="text-xs text-pretty font-medium">
                                {course.provider}:
                            </span>
                            <span className="text-xs text-gray-600">{course.title}</span>
                        </div>
                    ))}
                </div>
            </BSection>
            <BSection title="Languages">
                <div className="flex items-center gap-2.5">
                    {languages.map((language, index) => (
                        <span
                            key={`details-languages-${language}-${index}`}
                            className="text-xs text-gray-600"
                        >
                            {language}
                            {languages.length - 1 !== index ? "," : ""}
                        </span>
                    ))}
                </div>
            </BSection>
        </Fragment>
    );
};

export default memo(PEducation);

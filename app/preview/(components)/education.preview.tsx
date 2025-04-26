import { Details } from "@/types/pages/data.types";
import { Fragment, memo } from "react";

type Props = Pick<Details, "education" | "languages">;

const PEducation = ({ education, languages }: Props) => {
    return (
        <Fragment>
            <div className="grid grid-cols-1 gap-2.5 h-max">
                <h3 className="text-xl font-semibold text-pretty">Education:</h3>
                <div className="flex flex-nowrap gap-2.5 flex-col">
                    <span className="text-sm font-medium text-pretty">
                        {education.university.title}
                    </span>
                    <span className="text-sm text-gray-600">
                        {education.university.degree} ({education.university.startDate} -{" "}
                        {education.university.endDate})
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2.5 h-max">
                <h3 className="text-lg font-semibold text-pretty">
                    Courses and master classes:
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                    {education.courses.map((course, index) => (
                        <div
                            key={`details-education--course-${course.title}-${index}`}
                            className="space-x-1"
                        >
                            <span className="text-sm text-pretty font-medium">
                                {course.provider}:
                            </span>
                            <span className="text-sm text-gray-600">{course.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2.5 h-max">
                <h3 className="text-xl font-semibold text-pretty">Languages:</h3>
                <div className="flex items-center gap-2.5">
                    {languages.map((language, index) => (
                        <span
                            key={`details-languages-${language}-${index}`}
                            className="text-sm text-gray-600"
                        >
                            {language}
                            {languages.length - 1 !== index ? "," : ""}
                        </span>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default memo(PEducation);

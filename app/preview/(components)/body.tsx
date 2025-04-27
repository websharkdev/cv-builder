import { BSection } from "@/components/custom/(block)";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { details } from "./data";
import { PEducation, PPetProjects, PSkills, PWorks } from "./index";
import { Fragment } from "react";

const Body = () => {
    return (
        <div className="max-w-4xl mx-auto grid grid-cols-6 gap-5">
            <div className="flex col-span-full w-full items-end justify-between">
                <div className="grid grid-cols-1 gap-1">
                    <h1 className="text-base font-bold text-pretty">{details.name}</h1>
                    <h2 className="text-base font-semibold text-pretty">{details.title}</h2>
                    <h5 className="text-xs text-pretty">{details.address}</h5>
                </div>
                <div className="grid grid-cols-1 text-right">
                    <ul>
                        {details.contacts.map((contact, index) => (
                            <li key={index} className="flex items-center justify-end">
                                <Button asChild variant="link" size="sm" className="text-pretty text-xs">
                                    <Link href={contact.href}>
                                        <span>{contact.label}</span>
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-end gap-2">
                        {details.socials.map((social, index) => (
                            <Fragment>
                                <Button key={index} asChild variant="link" size="sm" className="text-pretty text-xs">
                                    <Link href={social.href}>
                                        <span>{social.label}</span>
                                    </Link>
                                </Button>
                                {details.socials.length - 1 !== index && <span className="text-xs text-gray-600">|</span>}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <BSection title="Summary" description={details.summary} />
            <BSection title="Skills">
                <PSkills skills={details.skills} />
            </BSection>
            <PWorks data={details.work_experience} />
            <PPetProjects data={details.pet_projects} />
            <PEducation
                education={details.education}
                languages={details.languages}
            />
        </div>
    );
};

export default Body;

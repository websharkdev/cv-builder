import { Button } from "@/components/ui/button";
import Link from "next/link";
import { details } from "./data";
import { PEducation, PPetProjects, PSkills, PWorks } from './index';

const Body = () => {
    return (
        <div className="container mx-auto grid grid-cols-6 py-10 gap-10">
            <div className="col-span-3 grid grid-cols-1 gap-2.5">
                <h1 className="text-4xl font-bold text-pretty">{details.name}</h1>
                <h2 className="text-2xl font-semibold text-pretty">{details.title}</h2>
                <h5 className="text-sm text-pretty">{details.address}</h5>
            </div>
            <div className="col-span-3 grid grid-cols-1 gap-2.5 text-right">
                <ul>
                    {details.contacts.map((contact, index) => (
                        <li key={index} className="flex items-center justify-end gap-2.5">
                            <Button asChild variant="link" size="sm">
                                <Link href={contact.href}>
                                    <span>{contact.label}</span>
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-full grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
                <h3 className="text-xl font-semibold text-pretty">Summary:</h3>
                <p className="text-sm text-gray-600 hyphens-auto font-normal text-pretty">{details.summary}</p>
            </div>

            <div className="col-span-4 grid grid-cols-1 gap- 2.5 border-b border-gray-300 pb-5">
                <h3 className="text-xl font-semibold text-pretty">Skills:</h3>
                <PSkills skills={details.skills} />
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
                <PEducation education={details.education} languages={details.languages} />
            </div>
            <PWorks data={details.work_experience} />
            <PPetProjects data={details.pet_projects} />
        </div>
    )
}

export default Body
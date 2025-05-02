'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { BSection } from "@/components/custom/(block)"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { IconSizeDefault, IconStrokeWidthDefault } from "@/lib/constants"
import { DForm } from "@/components/custom/(form)"
import { SkillsSchema } from "../(config)/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

type Props = {}


const CSkillsForm = () => {

    const form = useForm<z.infer<typeof SkillsSchema>>({
        resolver: zodResolver(SkillsSchema),
        defaultValues: {
            category: '',
            group: '',
            skills: []
        },
    });

    const onSubmit = (values: z.infer<typeof SkillsSchema>) => {
        console.log(values);
    };

    return (
        <DForm

            form={form as unknown as UseFormReturn}
            actions={{
                onSubmit: (values) => onSubmit(values as z.infer<typeof SkillsSchema>),
            }}
            status="success"
            error={{} as Error}
            classNames={{
                container: "max-w-4xl mx-auto p-3.5 bg-gray-50/50 rounded-md my-5",
                actions: "flex justify-center items-center",
                content: "grid grid-cols-6 gap-2.5",
            }}
            fields={[
                {
                    name: "category",
                    title: "Category",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "Category",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },
                {
                    name: "group",
                    title: "Group",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "Group",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },

                {
                    name: "skills",
                    title: "Skills",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "Skills (comma separated)",
                        className: "w-full col-span-6",
                    },
                }

            ]}
            submit={{
                "aria-label": "Create CV BUTTON",
                children: "Create CV",
                className: "w-full max-w-40 hover:cursor-pointer mt-5",
            }}
        />
    )
}

const CSkills = ({ }: Props) => {
    return (
        <BSection title="Skills">
            <div className="flex justify-between items-center gap-2.5">

                <Popover>
                    <PopoverTrigger asChild>
                        <Button>
                            <Plus size={IconSizeDefault} strokeWidth={IconStrokeWidthDefault} />
                            <span>Create Skill</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start">Place content for the popover here.</PopoverContent>
                </Popover>
            </div>

        </BSection>
    )
}

export default CSkills
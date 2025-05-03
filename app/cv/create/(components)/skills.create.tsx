'use client'

import { BSection } from "@/components/custom/(block)"
import { DForm } from "@/components/custom/(form)"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IconSizeDefault, IconStrokeWidthDefault } from "@/lib/constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { SkillsSchema } from "../(config)/schema"
import { useCallback, useMemo } from "react"
import { categories } from "@/actions/(data)/categories.actions"

type Props = {
    form: UseFormReturn
}


const CSkillsForm = ({ onCreate }: { onCreate: (value: z.infer<typeof SkillsSchema>) => void }) => {
    const form = useForm<z.infer<typeof SkillsSchema>>({
        resolver: zodResolver(SkillsSchema),
        defaultValues: {
            category: [],
            group: '',
            skills: []
        },
    });

    return (
        <DForm
            form={form as unknown as UseFormReturn}
            actions={{
                onSubmit: (values) => onCreate(values as z.infer<typeof SkillsSchema>),
            }}
            status="success"
            error={{} as Error}
            fields={[
                {
                    name: "category",
                    title: "Category",
                    type: "multiselect",
                    multiselect: {
                        data: categories,
                        placeholder: 'Category',
                        create: true
                    }
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
                },
                {
                    name: "skills",
                    title: "Skills",
                    type: "multiselect",
                    multiselect: {
                        data: [],
                        placeholder: 'Skills',
                        create: true
                    }
                }
            ]}
            submit={{
                "aria-label": "Create CV BUTTON",
                children: "Add skill",
                className: "w-full hover:cursor-pointer",
            }}
        />
    )
}

const CSkills = ({ form }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'skills',
    });


    const grouped = useMemo(() => {
        return fields.map((acc, field) => {


        })
    }, [fields])

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
                    <PopoverContent align="start"><CSkillsForm onCreate={append} /></PopoverContent>
                </Popover>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">

            </div>
        </BSection>
    )
}

export default CSkills
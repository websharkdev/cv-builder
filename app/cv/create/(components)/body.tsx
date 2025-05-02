"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { CVSchema } from "../(config)";
import { ISOCountries } from "@/actions/(data)/ico-countries.actions";
import { DForm } from "@/components/custom/(form)";
import CSkills from "./skills.create";

const Body = () => {
    const form = useForm<z.infer<typeof CVSchema>>({
        resolver: zodResolver(CVSchema),
        defaultValues: {
            bio: {
                name: "",
                surname: "",
                email: "",
                phone: "",
                city: "",
                country: "",
                post_code: "",
                github: "",
                linkedin: "",
                website: "",
            },
        },
    });

    const onSubmit = (values: z.infer<typeof CVSchema>) => {
        console.log(values);
    };

    return (
        <DForm
            form={form as unknown as UseFormReturn}
            actions={{
                onSubmit: (values) => onSubmit(values as z.infer<typeof CVSchema>),
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
                    name: "bio.name",
                    title: "Name",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "Your name",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },
                {
                    name: "bio.surname",
                    title: "Surname",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "Your surname",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },
                {
                    name: "bio.country",
                    title: "Country",
                    type: "autocomplete",
                    autocomplete: {
                        data: Object.entries(ISOCountries["countries"]).map((country) => {
                            return {
                                value: `${country[0]} ${country[1]}`,
                                label: country[1],
                            };
                        }),
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },
                {
                    name: "bio.city",
                    title: "City",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "City",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-2",
                    },
                },
                {
                    name: "bio.post_code",
                    title: "Post Code",
                    type: "input",
                    input: {
                        type: "text",
                        placeholder: "Post Code",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-1",
                    },
                },
                {
                    name: "",
                    title: "separator",
                    type: "separator",
                    classNames: {
                        container: "col-span-full",
                        label: "sr-only",
                    },
                },
                {
                    name: "bio.email",
                    title: "Email",
                    type: "input",
                    input: {
                        type: "email",
                        placeholder: "example@mail.com",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },
                {
                    name: "bio.phone",
                    title: "Phone",
                    type: "input",
                    input: {
                        type: "tel",
                        placeholder: "+XX XXX XXX XXX",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-3",
                    },
                },
                {
                    name: "bio.linkedin",
                    title: "LinkedIn profile",
                    type: "input",
                    input: {
                        type: "url",
                        placeholder: "https://...",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-2",
                    },
                },
                {
                    name: "bio.github",
                    title: "GitHub profile",
                    type: "input",
                    input: {
                        type: "url",
                        placeholder: "https://...",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-2",
                    },
                },
                {
                    name: "bio.website",
                    title: "Personal website",
                    type: "input",
                    input: {
                        type: "url",
                        placeholder: "https://...",
                        className: "w-full",
                    },
                    classNames: {
                        container: "col-span-2",
                    },
                },
                {
                    name: "",
                    title: "separator",
                    type: "separator",
                    classNames: {
                        container: "col-span-full",
                        label: "sr-only",
                    },
                },
                {
                    name: "summary",
                    title: "Summary",
                    type: "textarea",
                    textarea: {
                        placeholder: "Write a summary about yourself",
                        className: "w-full",
                        rows: 5,
                    },
                    classNames: {
                        container: "col-span-full",
                    },
                },
            ]}
            submit={{
                "aria-label": "Create CV BUTTON",
                children: "Create CV",
                className: "w-full max-w-40 hover:cursor-pointer mt-5",
            }}
        >
            <CSkills />
        </DForm>
    );
};

export default Body;

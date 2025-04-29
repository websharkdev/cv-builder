"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BIOSchema, CVSchema } from "../(config)";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BSection } from "@/components/custom/(block)";

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
                post_code: "082003",
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
        <div className="max-w-4xl mx-auto grid grid-cols-6 gap-5 py-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full col-span-full space-y-2.5"
                >
                    <BSection title="BIO">
                        <div className="grid grid-cols-2 bg-slate-50 p-5 rounded-md gap-5">
                            <FormField
                                control={form.control}
                                name="bio.name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /></div>
                    </BSection>
                    <div className="col-span-full flex justify-center items-center">
                        <Button type="submit">Create CV</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default Body;

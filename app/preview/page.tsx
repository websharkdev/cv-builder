import { Body } from "./(components)";

import { Metadata } from "next";
import { details } from "./(components)/data";

export const metadata: Metadata = {
    title: details.name,
    description: details.summary,
};

const Page = () => {
    return <Body />
};

export default Page;

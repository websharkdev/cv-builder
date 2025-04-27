
export type DContactItem = {
    label: string;
    href: string;
}

export type DSkillItem = {
    title: string;
    items: string[];
    sub?: DSkillItem[]
}

export type DUniversity = {
    title: string;
    degree: string;
    startDate: string;
    endDate?: string;
}

export type DCourse = {
    title: string;
    provider: string;
}


export type DEducation = {
    university: DUniversity;
    courses: DCourse[]
}

export type DWorkExperience = {
    title: string
    company: string,
    comment?: string,
    location: string,
    startDate: string,
    endDate?: string,
    achivements: string[]
}

export type DPetProject = {
    title: string
    link: string
    code: string
    achievements: string[]
    stack: string[]
}

export type Details = {
    name: string;
    title: string;
    address: string;
    summary: string;
    contacts: DContactItem[];
    socials: DContactItem[];
    skills: DSkillItem[];
    education: DEducation;
    languages: string[];
    work_experience: DWorkExperience[];
    pet_projects: DPetProject[]
}
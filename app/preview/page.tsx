import { Button } from "@/components/ui/button";
import Link from "next/link";
import { title } from "process";

const Page = () => {


    const details = {
        name: "Oleksii Bortnytskyi",
        title: "Frontend Engineer",
        address: "31006, Pamplona, Spain",
        contacts: [
            {
                href: "tel:+34680522262",
                label: "+34 680 522 262",
            },
            {
                href: "mailto:alexey.bortnytskyi@gmail.com",
                label: "alexey.bortnytskyi@gmail.com",
            },
            {
                href: "https://github.com/websharkdev",
                label: "GitHub",
            },
            {
                href: "https://www.linkedin.com/in/bortnytskyi-oleksii/",
                label: "LinkedIn",
            },
        ],
        summary: "Creative Frontend Engineer with over 8 years of experience designing and building dynamic, user-centric web applications. Expert in optimizing performance and delivering intuitive UI/UX, with a proven track record on high-impact projects. Began coding at 14, pivoting to freelancing after early career hurdles, then transitioning to full-time roles since 18, where I’ve driven scalable, high-performance solutions. My adaptability and problem-solving skills, sharpened through diverse freelance work, now propel my passion for contributing to innovative, long-term projects.",
        skills: [
            {
                title: 'Frontend',
                items: [
                    'TypeScript',
                    'React.js',
                    'Next.js',
                    'React Hooks',
                ],
                sub: [
                    {
                        title: 'Base',
                        items: [
                            'HTML5',
                            'CSS3',
                            'Tailwind CSS',
                            'SASS',
                            'Styled-Components',
                            'jQuery',
                            'JavaScript (ES6+)',
                            'Three.js'
                        ]
                    },
                    {
                        title: 'UI Libraries',
                        items: [
                            'Material UI',
                            'Radix UI',
                            'Shadcn UI',
                            'Ant Design',
                            'Bootstrap',
                            'Chakra UI',
                        ]
                    },
                    {
                        title: 'State Management',
                        items: [
                            "Redux",
                            "Zustand",
                            "Context API",
                        ]
                    },
                    {
                        title: 'Rendering',
                        items: [
                            "Server-Side Rendering (SSR)",
                            "Static Site Generation (SSG)",
                            "Incremental Static Regeneration (ISR)",
                            "Client-Side Rendering (CSR)",
                            "Progressive Web Apps (PWA)",
                            'Dynamic Rendering',
                        ]
                    },
                    {
                        title: 'Testing',
                        items: [
                            'Jest',
                            'React Testing Library',
                            'E2E Testing',
                        ]
                    },
                    {
                        title: 'Other',
                        items: [
                            "React Query",
                            "Axios",
                            "React Hook Form",
                            "Formik",
                            "React Router",
                            "Tanstack (Query, Table, Virtual & Router)",
                            'Storybook',
                            'Framer Motion',
                            'Babel',
                            'Webpack',
                            'Vite',
                            'Micro Frontends',
                            'ESLint',
                            'Prettier',
                            'BEM',
                        ]
                    },
                ]
            },
            {
                title: 'Backend',
                items: [
                    'Node.js',
                    'Express.js',
                    'Nest.js',
                    'Hono.js',
                ],
                sub: [
                    {
                        title: 'Databases',
                        items: [
                            'MongoDB',
                            'PostgreSQL',
                            'MySQL',
                            'SQLite',
                            'Redis (Familiar)',
                        ]
                    },
                    {
                        title: 'ORM/ODM',
                        items: [
                            'Prisma',
                            'Sequelize',
                            'Mongoose',
                        ]
                    },
                    {
                        title: 'Testing',
                        items: [
                            'Vitest',
                        ]
                    },
                    {
                        title: 'Other',
                        items: [
                            'REST API',
                            'MERN',
                            'GraphQL',
                            'OpenAPI',
                            'Docker',
                            'RESTful API',
                            'Microservices',
                            'Serverless',
                            'WebSockets',
                        ]
                    },
                ]
            },
            {
                title: 'DevOps',
                items: [
                    'Git',
                    'GitHub',
                    'GitLab',
                    'CI/CD',
                    'Vercel',
                    'Netlify',
                    'Railway',
                    'AWS (Familiar)',
                ]
            },
            {
                title: 'Principles',
                items: [
                    "Best Practices",
                    'Software Development Life Cycle (SDLC)',
                    'Test-Driven Development (TDD)',
                    'Microservices Architecture',
                    'SOLID Principles',
                    'Clean Code',
                    'YAGNI (You Aren\'t Gonna Need It)',
                    'KISS (Keep It Super Simple)',
                    'DRY (Don\'t Repeat Yourself)',
                    'Responsive Web Design (RWD)',
                ]
            },
            {
                title: 'Soft Skills',
                items: [
                    'Agile',
                    'Scrum',
                    'Kanban',
                    'Teamwork',
                    'Problem Solving',
                    'Adaptability',
                    'Creativity',
                    'Time Management',
                    'Attention to Detail',
                    'Communication',
                    'Critical Thinking',
                    'Collaboration',
                    'Leadership',
                ]
            },
        ],
        education: {
            university: {
                title: 'National University of Life and Environmental Sciences of Ukraine',
                degree: 'Bachelor of Computer Science',
                startDate: '2022',
                endDate: '2025',
            },
            courses: [
                {
                    title: 'A tour of web3 Ethereum & Smart Contracts with Solidity',
                    provider: 'Frontend Masters',
                },
                {
                    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
                    provider: 'Maximilian Schwarzmüller',
                },
                {
                    title: 'MongoDB - The Complete Developer\'s Guide',
                    provider: 'Maximilian Schwarzmüller',
                },
                {
                    title: 'ThreeJS Journey',
                    provider: 'Bruno Simon',
                },
                {
                    title: 'The Creative React and Redux Course',
                    provider: 'Developedbyed',
                },
                {
                    title: 'The Creative Javascript Course',
                    provider: 'Developedbyed',
                },
                {
                    title: 'Epic React Pro React Development from 0 to hero',
                    provider: 'Kent C. Dodds',
                },
                {
                    title: 'Testing JavaScript',
                    provider: 'Kent C. Dodds',
                },
            ]
        },
        languages: [
            "English",
            "Spanish",
            "Ukrainian",
            "russian",
        ],
        work_experience: [
            {
                title: "Senior Frontend Engineer",
                company: "Sploro & Kronis",
                location: "Pamplona, Navarra, Spain",
                startDate: "Apr 2024",
                endDate: "Feb 2025",
                achivements: [
                    'Spearheaded a complete migration from Django to React.js and Next.js; this reduced server requests by 60% and improved site performance by 45%.',
                    'Orchestrated the Gemini AI platform integration, enabling the development of 3+ new AI-powered features.',
                    'Enhanced product efficiency by implementing well-structured, reusable components for the final product.',
                    'Increased project speed from 24 to 98 points, optimizing overall performance.',
                    'Accelerated application loading (10,000+ table records) from 24 seconds to 1.8 seconds, with initial availability in 0.4 seconds via lazy loading.'
                ]
            },
            {
                title: "Middle Frontend Developer",
                company: "Alias",
                type: "Contract",
                location: "Pamplona, Navarra, Spain",
                startDate: "Apr 2024",
                endDate: "Jul 2024",
                achivements: [
                    'Led the creation of a new, fast, and user-friendly user interface for the company\'s website, enhancing user experience and engagement.',
                    'Responsible for taking the company from beta to production, ensuring a smooth transition and successful launch.',
                    'The final product I created was shown at the At Creator Week confab in Singapore and received positive feedback from the audience.'
                ]
            },
            {
                title: "Frontend / Backend Developer",
                company: "Freelance",
                location: "Remote",
                startDate: "Dec 2023",
                endDate: "Apr 2024",
                achivements: [
                    'Collaborated with the Lumia crypto project, leading the development of the user-facing product showcased during the Token Generation Event (TGE).',
                    'Cooperated with the crypto-game Afterland. Responsible for creating a landing page and wow animations using three.js and react-three-fiber.',
                    'CTO (Chief Technology Officer) - at Penguin Agency, responsible for delivering, creating, and communicating with clients. I was responsible for the entire development process, from the first meeting to the final product.',
                ]
            },
            {
                title: "Senior / Lead Frontend Developer",
                company: "LeadPro Agency",
                location: "Remote",
                startDate: "Aug 2023",
                endDate: "Dec 2023",
                achivements: [
                    'Communication with customers and team members, ensuring that all parties are aligned and informed throughout the development process.',
                    'Responsible for the entire development process, from the first meeting to the final product.',
                    'Built products for other companies and startups',
                    'Managed a team of 4+ developers',
                ]
            },
            {
                title: "Middle Frontend Developer",
                company: "Florida Agency",
                location: "Remote",
                startDate: "Apr 2023",
                endDate: "Aug 2023",
                achivements: [
                    'Responsible for creating a dashboard for one of the largest pizzerias in Ukraine. ',
                    'Managed the connection of the payment system and authentication system.',
                    'Responsible for creating and finding components that can be turned into reusable components, thereby improving productivity'
                ]
            },
            {
                title: "Junior Frontend Developer",
                company: "Investables",
                location: "Kyiv, Ukraine - Pamplona, Navarra, Spain",
                startDate: "Apr 2022",
                endDate: "Jun 2022",
                comment: 'In connection with the war in Ukraine & relocation to Spain, I decided to leave the company so as not to slow down the creation of the project.',
                achivements: [
                    'Managed the creation of overused components and their implementation in Storybook, which improved project performance by 40%.',
                    'Responsible for connecting MetaMask to the product to realize purchases',
                ]
            },
            {
                title: "Junior Frontend Developer",
                company: "NeonPilots & Changeblock",
                location: "Kyiv, Ukraine",
                startDate: "Oct 2021",
                endDate: "Apr 2022",
                achivements: [
                    'Developed pages and over-used components for the company\'s website.',
                    'Created a landing page for the company',
                    'Led the development of the main dashboard',
                ]
            },
            {
                title: "Junior Frontend Developer",
                company: "Freelance",
                location: "Kyiv, Ukraine",
                startDate: "Jun 2019",
                endDate: "Oct 2021",
                achivements: [
                    'Was responsible for the development of the Lending Page, dashboards, and app creation.',
                    'Created a personal brand that helped me find clients.',
                    'Worked with clients from the USA, Canada, and Europe.',
                ]
            },
        ],
    }

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
                <p className="text-sm text-gray-600">{details.summary}</p>
            </div>

            <div className="col-span-4 grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
                <h3 className="text-xl font-semibold text-pretty">Skills:</h3>
                <ul className="space-y-2.5">
                    {details.skills.map((skill, index) => (
                        <li key={`details-skills--global-${skill.title}-${index}`} className="grid grid-cols-1 gap-2.5">
                            <div className="flex items-center flex-wrap gap-1">
                                <span className="text-base font-medium text-pretty">{skill.title}:</span>

                                {skill.items.map((item, gindex) => (
                                    <span key={`details-skills--global-${skill.title}-skill_item-${gindex}`} className="text-sm text-gray-600">{item}{skill.items.length - 1 !== gindex ? ',' : ""}</span>
                                ))}</div>

                            {skill.sub && skill.sub.length > 0 && (
                                <ul className="list-disc list-outside pl-5 space-y-1.5">
                                    {skill.sub.map((sub, sindex) => (
                                        <li key={`details-skills--global-${skill.title}-sub-skill-${sub.title}-${sindex}`} className="space-x-1">
                                            <span className="text-sm font-medium text-pretty">{sub.title}:</span>
                                            {sub.items.map((item, siindex) => (
                                                <span key={`details-skills--global-${skill.title}-sub-skill-${sub.title}-sub-item-skill-${item}-${siindex}`} className="text-sm text-gray-600">{item}{sub.items.length - 1 !== siindex ? ',' : ""}</span>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
                <div className="grid grid-cols-1 gap-2.5 h-max">
                    <h3 className="text-xl font-semibold text-pretty">Education:</h3>
                    <div className="flex flex-nowrap gap-2.5 flex-col">
                        <span className="text-sm font-medium text-pretty">{details.education.university.title}</span>
                        <span className="text-sm text-gray-600">
                            {details.education.university.degree} ({details.education.university.startDate} - {details.education.university.endDate})
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2.5 h-max">
                    <h3 className="text-lg font-semibold text-pretty">Courses and master classes:</h3>
                    <div className="grid grid-cols-1 gap-2.5">
                        {details.education.courses.map((course, index) => (
                            <div key={`details-education--course-${course.title}-${index}`} className="space-x-1">
                                <span className="text-sm text-pretty font-medium">{course.provider}:</span>
                                <span className="text-sm text-gray-600">{course.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2.5 h-max">
                    <h3 className="text-xl font-semibold text-pretty">Languages:</h3>
                    <div className="flex items-center gap-2.5">
                        {details.languages.map((language, index) => (
                            <span key={`details-languages-${language}-${index}`} className="text-sm text-gray-600">{language}{details.languages.length - 1 !== index ? ',' : ""}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-full grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
                <h3 className="text-xl font-semibold text-pretty">Work Experience:</h3>
                <ul>
                    {details.work_experience.map((work, index) => (
                        <li key={`details-work_experience-${work.title}-${index}`} className="grid grid-cols-1 gap-2.5 pb-5">
                            <div className="flex flex-nowrap gap-2.5 flex-col">
                                <span className="text-sm font-medium text-pretty">{work.company} ({work.location})</span>
                                <span className="text-sm text-gray-600">{work.title} ({work.startDate} - {work.endDate})</span>
                            </div>
                            {work.comment && <span className="text-sm text-gray-600">{work.comment}</span>}
                            <ul className="list-disc list-outside pl-5 space-y-1.5">
                                {work.achivements.map((achivement, achindex) => (
                                    <li key={`details-work_experience--achivement-${achivement}-${achindex}`} className="text-sm text-gray-600">{achivement}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Page;

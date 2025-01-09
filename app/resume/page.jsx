"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJest, SiRedis, SiBootstrap, SiFirebase } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import Image from "next/image";

const about = {
    title: 'About Me',
    description: 'I am a self-taught developer who is passionate about creating beautiful and functional websites. I have experience in building websites using HTML, CSS, and JavaScript. I am also familiar with React, Tailwind CSS, and Next.js. I am currently learning Node.js and Figma.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Alfi Ridha M',
        },
        {
            fieldName: 'Location',
            fieldValue: 'Cirebon, Indonesia',
        },
        {
            fieldName: 'Email',
            fieldValue: 'alfipunya0808@gmail.com'
        },
        {
            fieldName: 'Instagram',
            fieldValue: 'ridoritoss'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+62) 882 204 11492'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Indonesia, English'
        },
    ]
}

const education = {
    title: 'My Education',
    description: "I didn't have a background in web development and design before. I learned everything from the internet, online courses and join bootcamp. Here are some of the education I have taken:",
    items: [
        {
            school: 'Hacktiv8 Indonesia',
            degree: 'Fullstack JavaScript Web Developer',
            duration: 'July 2024 - December 2024',
        },
        {
            school: "Ma'had Dhiyyaus Sunnah Cirebon",
            degree: 'Islamic Boarding School',
            duration: '2015 - 2022',
        },
        {
            school: "MySkills Academy",
            degree: 'UI/UX Design Online Course',
            duration: 'Summer 2023',
        },
    ]
}

const skills = {
    title: 'My Skills',
    description: 'I have experience in building websites using HTML, CSS, and JavaScript. I am also familiar with React, Tailwind CSS, and Next.js. I am currently learning Node.js and Figma.',
    skillList: [
        {
            name: 'HTML',
            icon: <FaHtml5 />,
        },
        {
            name: 'CSS',
            icon: <FaCss3 />,
        },
        {
            name: 'JavaScript',
            icon: <FaJs />,
        },
        {
            name: 'React',
            icon: <FaReact />,
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />,
        },
        {
            name: 'Next.js',
            icon: <SiNextdotjs />,
        },
        {
            name: 'Node.js',
            icon: <FaNodeJs />,
        },
        {
            name: 'Figma',
            icon: <FaFigma />,
        },
        {
            name: 'Jest',
            icon: <SiJest />,
        },
        {
            name: 'Redis',
            icon: <SiRedis />,
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap />,
        },
        {
            name: 'Firebase',
            icon: <SiFirebase />,
        },
    ]
}

const certificates = {
    title: "My Certificates",
    description: "I have taken several online courses and bootcamps to improve my skills. Here are some of the certificates I have earned:",
    items: [
        {
            name: 'Software Engineer Development',
            issuer: 'Hacktiv8 Indonesia',
            duration: 'July 2024 - December 2024',
            image: "/assets/Certificate/Hacktiv8.png"
        },
        {
            name: 'Fundamental UX Design',
            issuer: 'MySkills Academy',
            duration: 'Summer 2023',
            image: "/assets/Certificate/FundamentalUX.png"
        },
        {
            name: 'Fundamental UI Design',
            issuer: 'MySkills Academy',
            duration: 'Summer 2023',
            image: "/assets/Certificate/FundamentalUI.png"
        },
        {
            name: 'Javascript Certificate',
            issuer: 'HackerRank',
            duration: 'November 2022',
            image: "/assets/Certificate/Javascript.png"
        },
        {
            name: 'CSS Certificate',
            issuer: 'HackerRank',
            duration: 'November 2022',
            image: "/assets/Certificate/CSS.png"
        },
        {
            name: 'Problem Solving Certificate',
            issuer: 'HackerRank',
            duration: 'November 2022',
            image: "/assets/Certificate/ProblemSolving.png"
        },
        {
            name: 'SQL Certificate',
            issuer: 'HackerRank',
            duration: 'November 2022',
            image: "/assets/Certificate/SQl.png"
        },
        {
            name: 'React Certificate',
            issuer: 'HackerRank',
            duration: 'November 2022',
            image: "/assets/Certificate/React.png"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[60vh] flex items-center justify-center py-4 xl:py-0"
        >
            <div className="container mx-2 px-4 xl:px-0">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-4 items-start"
                >
                    <div className="flex flex-col gap-4 mx-auto my-4">
                        <h1 className="text-5xl font-semibold ">Why Hire Me?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, necessitatibus?</p>
                        {/* Tabs List */}
                        <TabsList className="flex flex-col w-full h-64 max-w-[400px] mx-auto xl:mx-0 gap-4 shrink-0">
                            <TabsTrigger value="about">About Me</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="certificates">Certificates</TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Tabs Content */}
                    <div className="min-h-[70vh] w-full mt-4">
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-3xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-primary mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="flex flex-col gap-2 bg-slate-100 h-[184px py-6 px-10 rounded-xl felx felx-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-slate-800">{item.school}</p>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-3xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-primary mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-4 md:gird-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-slate-100 rounded-xl flex items-center justify-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize ">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about"
                            className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-accent">{item.fieldName}:</span>
                                                <span className="text-primary">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* certifications */}
                        <TabsContent value="certificates" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-3xl font-bold">{certificates.title}</h3>
                                    <p className="max-w-[600px] text-primary mx-auto xl:mx-0">{certificates.description}</p>
                                </div>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-[30px]">
                                        {certificates.items.map((certificate, index) => {
                                            return (
                                                <li key={index} className="flex flex-col gap-4 bg-slate-100 p-4 rounded-xl">
                                                    <div className="relative w-full h-[250px]">
                                                        <Image
                                                            src={certificate.image}
                                                            fill className="object-cover"
                                                            alt={certificate.name}
                                                        />
                                                    </div>
                                                    <h4 className="text-xl font-bold">{certificate.name}</h4>
                                                    <p className="text-accent">{certificate.issuer}</p>
                                                    <p className="text-primary">{certificate.duration}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;

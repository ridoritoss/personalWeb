"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJest, SiRedis, SiBootstrap, SiFirebase } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { about, education, skills, certificates } from "./data";

const InfoList = ({ items }) => (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {items.map((item, index) => (
            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className="text-accent">{item.fieldName}:</span>
                <span className="text-primary">{item.fieldValue}</span>
            </li>
        ))}
    </ul>
);

const EducationItem = ({ school, degree, duration }) => (
    <li className="flex gap-1 bg-slate-100 h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start">
        <span className="text-accent">{duration}</span>
        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{degree}</h3>
        <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-slate-800">{school}</p>
        </div>
    </li>
);

const SkillItem = ({ name, icon }) => (
    <li>
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-slate-100 rounded-xl flex items-center justify-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{icon}</div>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="capitalize">{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </li>
);

const CertificateItem = ({ name, issuer, duration, image }) => (
    <li className="flex flex-col gap-4 bg-slate-100 p-4 rounded-xl">
        <div className="relative w-full h-[250px]">
            <Image src={image} fill className="object-cover" alt={name} />
        </div>
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-accent">{issuer}</p>
        <p className="text-primary">{duration}</p>
    </li>
);

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[60vh] flex items-center justify-center py-4 xl:py-0">
            <div className="container mx-2 px-4 xl:px-0">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-4 items-start">
                    <TabsList className="flex flex-col w-full h-64 max-w-[400px] mx-auto xl:mx-0 gap-4 shrink-0">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="certificates">Certificates</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full mt-4">
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] mx-auto xl:mx-0">{about.description}</p>
                            <InfoList items={about.info} />
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <h3 className="text-3xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-primary mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => <EducationItem key={index} {...item} />)}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            <h3 className="text-3xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-primary mx-auto xl:mx-0">{skills.description}</p>
                            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => <SkillItem key={index} {...skill} />)}
                            </ul>
                        </TabsContent>

                        <TabsContent value="certificates" className="w-full">
                            <h3 className="text-3xl font-bold">{certificates.title}</h3>
                            <p className="max-w-[600px] text-primary mx-auto xl:mx-0">{certificates.description}</p>
                            <ScrollArea className="h-[600px]">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-[30px]">
                                    {certificates.items.map((certificate, index) => <CertificateItem key={index} {...certificate} />)}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;

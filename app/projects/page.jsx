"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';
import Link from 'next/link';
import Image from 'next/image';


const projects = [
    {
        num: "01",
        title: "Project 1",
        category: "frontend",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium adipisci cum debitis officiis accusamus. Unde perspiciatis fuga, placeat nisi iusto ad delectus deserunt accusamus voluptatem! Saepe nihil optio vitae possimus.",
        stack: [
            { name: "React" },
            { name: "Tailwind" },
            { name: "Next.js" },
        ],
        image: "/assets/MyProject/tes_web.jpg"
    },
    {
        num: "02",
        title: "Project 2",
        category: "backend",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium adipisci cum debitis officiis accusamus. Unde perspiciatis fuga, placeat nisi iusto ad delectus deserunt accusamus voluptatem! Saepe nihil optio vitae possimus.",
        stack: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "MongoDB" },
        ],
        image: "/assets/MyProject/tes_web2.png"
    },
    {
        num: "03",
        title: "Project 3",
        category: "fullstack",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium adipisci cum debitis officiis accusamus. Unde perspiciatis fuga, placeat nisi iusto ad delectus deserunt accusamus voluptatem! Saepe nihil optio vitae possimus.",
        stack: [
            { name: "React" },
            { name: "Tailwind" },
            { name: "Next.js" },
        ],
        image: "/assets/MyProject/tes_web.jpg"
    },
    {
        num: "04",
        title: "Project 4",
        category: "frontend",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium adipisci cum debitis officiis accusamus. Unde perspiciatis fuga, placeat nisi iusto ad delectus deserunt accusamus voluptatem! Saepe nihil optio vitae possimus.",
        stack: [
            { name: "React" },
            { name: "Tailwind" },
            { name: "Next.js" },
        ],
        image: "/assets/MyProject/tes_web2.png"
    },
    {
        num: "05",
        title: "Project 5",
        category: "backend",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium adipisci cum debitis officiis accusamus. Unde perspiciatis fuga, placeat nisi iusto ad delectus deserunt accusamus voluptatem! Saepe nihil optio vitae possimus.",
        stack: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "MongoDB" },
        ],
        image: "/assets/MyProject/tes_web.jpg"
    },
    {
        num: "06",
        title: "Project 6",
        category: "fullstack",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium adipisci cum debitis officiis accusamus. Unde perspiciatis fuga, placeat nisi iusto ad delectus deserunt accusamus voluptatem! Saepe nihil optio vitae possimus.",
        stack: [
            { name: "React" },
            { name: "Tailwind" },
            { name: "Next.js" },
        ],
        image: "/assets/MyProject/tes_web2.png"
    },
]

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outine */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
                            {/* category */}
                            <h2 className='text-[42px] font-bold leading-none hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                            {/* desc */}
                            <p className='text-primary/70'>{project.description}</p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-accent text-xl'>
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='border border-primary/40'></div>
                            {/* button */}
                            <div className='flex items-center gap-4'>
                                {/* web */}
                                <Link href='' as={`/projects/${project.title}`}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-primary/30 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-3xl text-white group-hover:text-accent transition-all duration-300' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <span>Visit site</span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github repo */}
                                <Link href='' as={`/projects/${project.title}`}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-primary/30 flex justify-center items-center group'>
                                                <BsGithub className='text-3xl text-white group-hover:text-accent transition-all duration-300' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <span>Visit repository</span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-21'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((projects, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-primary/30'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full bg-primary/30 z-10'></div>
                                            {/* image */}
                                            <div className='relative w-full h-full'>
                                                <Image src={projects.image} fill className='object-cover' alt='' />
                                            </div>
                                        </div>
                                    </ SwiperSlide>
                                )
                            })}
                            {/* slider button */}
                            <WorkSliderBtns
                                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent/60 hover:bg-accent text-white text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all duration-300"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
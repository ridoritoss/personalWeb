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
        title: "Karsaku",
        category: "frontend",
        description: "A mobile app designed to guide users toward healthy living through personalized plans, stress monitoring, and relaxation tips-helping you achieve a happier and more balanced life.",
        stack: [
            { name: "React Native" },
            { name: "Next.js" },
            { name: "Expo" },
            { name: "Open AI" },
            { name: "Apollo Client" },
            { name: "Apollo Server" },
            { name: "MongoDB" },
            { name: "GraphQL" },
            { name: "AWS" },
        ],
        image: "/assets/MyProject/karsaku.png",
        github: "https://github.com/Hacktiv8-Karsaku",
        page: "https://expo.dev/preview/update?message=Merge%20branch%20%27development%27&updateRuntimeVersion=1.0.0&createdAt=2024-12-12T01%3A13%3A56.063Z&slug=exp&projectId=05079de3-cb8a-4c0a-80fb-7c06da78b633&group=42a3c95f-86f0-47f4-a2a1-5e2ddee4d706"
    },
    {
        num: "02",
        title: "Vulp+",
        category: "fullstack",
        description: "A website that specializes in the merchant top-up sector, making it easier for gamers to purchase in-game currency.",
        stack: [
            { name: "Javascript" },
            { name: "ReactJS" },
            { name: "ExpressJS" },
            { name: "PostgresSQL" },
            { name: "Socket.io" },
            { name: "Jest" },
            { name: "AWS" },
            { name: "Google OAuth" },
            { name: "Gemini AI" },
        ],
        image: "/assets/MyProject/Vulp-web.png",
        github: "https://github.com/ridoritoss/ip-ridoritoss/tree/dev",
        page: "https://vulp-plus-99b5f.web.app/login"
    },
    {
        num: "03",
        title: "Rizz N Dizz",
        category: "fullstack",
        description: "Rizz N Dizz is a cutting-edge apparel brand inspired by the bold and playful style of Rip N Dip, offering unique and creative designs that blend streetwear culture with a touch of humor and individuality.",
        stack: [
            { name: "Typescript" },
            { name: "Next.js" },
            { name: "MongoDB" },
            { name: "Apollo Client" },
            { name: "Apollo Server" },
            { name: "Vercel" },
        ],
        image: "/assets/MyProject/rizzndizz.png",
        github: "https://github.com/H8-FSJS-P3S5/gc02-ridoritoss",
        page: "https://rizzndizz.vercel.app/"
    },
    {
        num: "04",
        title: "Banter Social Media",
        category: "frontend",
        description: "Banter is a dynamic social media platform designed to spark meaningful conversations, connect communities, and inspire authentic interactions in a vibrant digital space.",
        stack: [
            { name: "Javascript" },
            { name: "Tailwind" },
            { name: "NodeJS" },
            { name: "Sequilize" },
        ],
        image: "/assets/MyProject/banter-socmed.png",
        github: "https://github.com/AbdulRidhoRamadhan/banter-Social-Media",
        page: ""
    },
    {
        num: "05",
        title: "Visualt Web Design",
        category: "UI Design",
        description: "A clean and minimalist web platform showcasing creative works with an intuitive user experience.",
        stack: [
            { name: "Figma" }
        ],
        image: "/assets/MyProject/Preview-visualt.jpg",
        github: "",
        page: "https://www.figma.com/design/jwYhr0EhLLYyFqj4rHPJ4a/visu.alt-web?node-id=0-1&t=QGYfzvCvCPpQqFnY-1"
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
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline dark:text-white dark:text-opacity-90'>
                                {project.num}
                            </div>
                            <div>
                                {/* title */}
                                <h2 className='text-[42px] font-bold leading-none hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
                                {/* category */}
                                <span className='leading-none capitalize'>{project.category} project</span>
                            </div>
                            {/* desc */}
                            <p className='text-primary/70'>{project.description}</p>
                            {/* stack */}
                            <div>
                                <ul className='flex flex-wrap gap-2'>
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className='text-accent'>
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className='border border-primary/40'></div>
                            {/* button */}
                            <div className='flex items-center gap-4'>
                                {/* web */}
                                <Link href='' as={project.page}>
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
                                <Link href='' as={project.github}>
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
                    <div className='w-full xl:w-[55%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-21'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((projects, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center xl:bg-primary/30'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full '></div>
                                            {/* image */}
                                            <div className='relative w-full h-[300px] xl:w-full xl:h-[460px]'>
                                                <Image src={projects.image} fill className='object-cover' alt={projects.title} />
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
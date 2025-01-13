"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "I can build you a website that is fast, responsive, and user-friendly. I specialize in React, Next.js, and Tailwind CSS.",
        href: "",
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "I can design your website to be user-friendly, intuitive, and visually appealing. I specialize in Figma.",
        href: "",
    },
    {
        num: "03",
        title: "Frontend Development",
        description: "I can build you a modern, interactive frontend using the latest technologies like React, Next.js, and Tailwind CSS.",
        href: "",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {services.map((service, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                            }}
                            className="flex flex-col gap-4 group"
                        >
                            {/* num n icon */}
                            <div className="w-full flex justify-between items-center">
                                <div className="font-extrabold text-5xl text-outline 
                                text-transparent group-hover:text-outline-hover transition-all duration-500 dark:text-white">
                                    {service.num}
                                </div>
                                <Link
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-primary flex items-center justify-center
                                     group-hover:bg-accent transition-all duration-500 hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-white text-3xl" />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-primary group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            {/* desc */}
                            <p className="text-sm text-primary">{service.description}</p>
                            {/* border */}
                            <div className="border-b border-primary w-full"></div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;

"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import Select components from local components instead of Radix directly
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        value: '(+62) 882 2041 1492'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        value: 'alfipunya0808@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        value: 'Jl. Langensarilama No. 12, Cirebon, Indonesia'
    }
]

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="w-full">
                        <form className="flex flex-col gap-6 p-10 bg-slate-100 rounded-xl">
                            <h3 className="text-4xl text-accent">Let's Connect!</h3>
                            <p className="text-primary/70">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam soluta voluptatem repudiandae voluptates!
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Firstname" />
                                <Input type="text" placeholder="Lastname" />
                                <Input type="tel" placeholder="Phone" />
                                <Input type="email" placeholder="Email" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="webdev">Web Developer</SelectItem>
                                        <SelectItem value="frontend">Front-End Developer</SelectItem>
                                        <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea placeholder="Your message" rows={6} />
                            {/* button */}
                            <Button className="w-fit">Send Message</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex flex-col gap-y-4 xl:gap-y-16 order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <div key={index} className="flex items-center gap-x-4">
                                    <div className="text-2xl text-accent">{item.icon}</div>
                                    <div>
                                        <h3 className="text-primary/70">{item.title}</h3>
                                        <p className="text-xl text-primary">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
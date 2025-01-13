"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

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
        value: 'Cirebon, Indonesia'
    }
];

const Contact = () => {
    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }, []);

    // State untuk form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle service selection
    const handleServiceChange = (value) => {
        setFormData(prev => ({
            ...prev,
            service: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        try {
            console.log("Form Data:", formData); // Debug: cek data yang dikirim
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            console.log("EmailJS Response:", response); // Debug: cek response EmailJS
            setStatus('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error("EmailJS Error:", error); // Debug: cek error EmailJS
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


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
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-slate-100 rounded-xl">
                            <h3 className="text-4xl text-accent">Let's Connect!</h3>
                            <p className="text-primary/70">
                            Let’s build something amazing together! Whether it’s a website or a front-end project, I’m here to bring your ideas to life.
                            </p>

                            {/* Status message */}
                            {status && (
                                <div className={`p-4 rounded ${status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {status}
                                </div>
                            )}

                            {/* inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Firstname"
                                    required
                                />
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Lastname"
                                    required
                                />
                                <Input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    required
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            {/* select */}
                            <Select
                                value={formData.service}
                                onValueChange={handleServiceChange}
                                required
                            >
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
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                rows={6}
                                required
                            />

                            {/* button */}
                            <Button
                                type="submit"
                                className="w-fit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </Button>
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
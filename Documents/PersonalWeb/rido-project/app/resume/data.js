import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJest, SiRedis, SiBootstrap, SiFirebase } from "react-icons/si";

export const about = {
    title: 'About Me',
    description: 'I am a self-taught developer who is passionate about creating beautiful and functional websites. I have experience in building websites using HTML, CSS, and JavaScript. I am also familiar with React, Tailwind CSS, and Next.js. I am currently learning Node.js and Figma.',
    info: [
        { fieldName: 'Name', fieldValue: 'Alfi Ridha M' },
        { fieldName: 'Location', fieldValue: 'Cirebon, Indonesia' },
        { fieldName: 'Email', fieldValue: 'alfipunya0808@gmail.com' },
        { fieldName: 'Instagram', fieldValue: 'ridoritoss' },
        { fieldName: 'Phone', fieldValue: '(+62) 882 204 11492' },
        { fieldName: 'Freelance', fieldValue: 'Available' },
        { fieldName: 'Languages', fieldValue: 'Indonesia, English' },
    ]
};

export const education = {
    title: 'My Education',
    description: "I didn't have a background in web development and design before. I learned everything from the internet, online courses and join bootcamp. Here are some of the education I have taken:",
    items: [
        { school: 'Hacktiv8 Indonesia', degree: 'Fullstack JavaScript Web Developer', duration: 'July 2024 - December 2024' },
        { school: "Ma'had Dhiyyaus Sunnah Cirebon", degree: 'Islamic Boarding School', duration: '2015 - 2022' },
        { school: "MySkills Academy", degree: 'UI/UX Design Online Course', duration: 'Summer 2023' },
    ]
};

export const skills = {
    title: 'My Skills',
    description: 'I have experience in building websites using HTML, CSS, and JavaScript. I am also familiar with React, Tailwind CSS, and Next.js. I am currently learning Node.js and Figma.',
    skillList: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3 /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Jest', icon: <SiJest /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Firebase', icon: <SiFirebase /> },
    ]
};

export const certificates = {
    title: "My Certificates",
    description: "I have taken several online courses and bootcamps to improve my skills. Here are some of the certificates I have earned:",
    items: [
        { name: 'Software Engineer Development', issuer: 'Hacktiv8 Indonesia', duration: 'July 2024 - December 2024', image: "/assets/Certificate/Hacktiv8.png" },
        { name: 'Fundamental UX Design', issuer: 'MySkills Academy', duration: 'Summer 2023', image: "/assets/Certificate/FundamentalUX.png" },
        { name: 'Fundamental UI Design', issuer: 'MySkills Academy', duration: 'Summer 2023', image: "/assets/Certificate/FundamentalUI.png" },
        { name: 'Javascript Certificate', issuer: 'HackerRank', duration: 'November 2022', image: "/assets/Certificate/Javascript.png" },
        { name: 'CSS Certificate', issuer: 'HackerRank', duration: 'November 2022', image: "/assets/Certificate/CSS.png" },
        { name: 'Problem Solving Certificate', issuer: 'HackerRank', duration: 'November 2022', image: "/assets/Certificate/ProblemSolving.png" },
        { name: 'SQL Certificate', issuer: 'HackerRank', duration: 'November 2022', image: "/assets/Certificate/SQl.png" },
        { name: 'React Certificate', issuer: 'HackerRank', duration: 'November 2022', image: "/assets/Certificate/React.png" },
    ]
};

"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 3, duration: 0.4, ease: "easeIn" },
                }}
            >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative">
                    <Image
                        src="/assets/Home/meme.jpg"
                        quality={100}
                        fill
                        priority
                        alt="eVERYTHING iS uNDER cONTROL, i thINK sO?"
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </div>


    )
};

export default Photo;
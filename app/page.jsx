"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "@/components/Photo";
import Link from "next/link";

const roles = ["Junior Software Engineer", "Junior Frontend Developer", "Junior UI/UX Designer"];

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setIsWaiting(true);
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setReverse(true);
      }, 2000);
      return () => clearTimeout(waitTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    if (isWaiting) return;

    const timeout = setTimeout(() => {
      setText(words[index].slice(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, isWaiting]);

  return text;
};

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const names = ["Alfi Ridha M", "ridoritoss"];
  const typedText = useTypewriter(names);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => setIsAnimationDone(true);

  return (
    <section className="h-full">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between h-full py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={handleAnimationComplete}
        >
          {isAnimationDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }}
              className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"
            >
              <div className="text-center xl:text-left">
                <div className="h-[40px] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[currentRole]}
                      className="text-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {roles[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <h1 className="h1 mb-6">
                  Hello, I'm<br />
                  <span className="text-accent typewriter-container">
                    {typedText}
                    <span className="typewriter-cursor">|</span>
                  </span>
                </h1>
                <p className="max-w-[500px] mb-9">
                  Hi there! Welcome to my portfolio. I’m passionate about building beautiful and
                  functional web experiences. Feel free to explore and let’s connect!
                </p>

                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="uppercase flex items-center gap-2"
                  >
                    <Link
                      href="/assets/Home/alfi-ridha-m-CV.pdf"
                      download="alfi-ridha-m-CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                      <FiDownload className="text-xl" />
                    </Link>
                  </Button>
                  <div className="mb-8 xl:mb-0">
                    <Socials
                      containerStyle="flex gap-6"
                      iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        <div>
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Home;

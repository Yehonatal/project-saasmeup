"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border-white/15 border  bg-neutral-950/70 backdrop-blur rounded-[27px] md:rounded-full">
                        <div className="px-4 grid grid-cols-2 items-center p-2 md:pr-2 lg:grid-cols-3 ">
                            <div>
                                <Image
                                    className="h-9 w-auto  md:h-auto"
                                    src={logoImage}
                                    alt="Layers Logo"
                                />
                            </div>
                            <div className=" justify-center hidden lg:flex">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="text-white hover:text-lime-400"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden "
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>
                                <Button
                                    className="hidden md:inline-flex items-center  "
                                    variant="secondary"
                                >
                                    Log In
                                </Button>
                                <Button
                                    className="hidden md:inline-flex items-center"
                                    variant="primary"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex py-2 gap-4 flex-col items-center mb-8 ">
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                className=" md:inline-flex items-center gap-4 text-white hover:text-lime-400"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button
                                            className="md:inline-flex items-center  "
                                            variant="secondary"
                                        >
                                            Log In
                                        </Button>
                                        <Button
                                            className=" md:inline-flex items-center"
                                            variant="primary"
                                        >
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}

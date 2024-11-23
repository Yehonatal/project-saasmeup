"use client";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="container">
                    <h3 className="text-white/50 text-center text-xl">
                        Already chosen by these market leaders
                    </h3>
                    <div className="overflow-hidden flex mt-12 mask-gradient">
                        <motion.div
                            animate={{
                                x: "-50%",
                            }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            className="flex gap-24 pr-24 flex-none"
                        >
                            {Array.from({ length: 2 }).map((_, i) => (
                                <Fragment key={i}>
                                    {logos.map((logo) => (
                                        <Image
                                            src={logo.image}
                                            alt={logo.name}
                                            key={logo.name}
                                        />
                                    ))}
                                </Fragment>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

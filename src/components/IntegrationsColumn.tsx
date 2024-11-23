"use client";

import { IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export function IntegrationsColumn(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            }}
            className={twMerge("", className)}
        >
            <div className="flex flex-col flex-none gap-4 pb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Fragment key={i}>
                        {integrations.map(({ name, icon, description }) => (
                            <div
                                key={name}
                                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                            >
                                <div className="flex justify-center">
                                    <Image
                                        src={icon}
                                        alt={`${name} icon`}
                                        className="size-24"
                                    />
                                </div>
                                <h3 className="text-3xl text-center mt-6">
                                    {name}
                                </h3>
                                <p className="mt-2 text-center text-white/50">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </motion.div>
    );
}

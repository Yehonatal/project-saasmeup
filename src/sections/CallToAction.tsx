/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [callScope, callAnimate] = useAnimate();

    useEffect(() => {
        animation.current = callAnimate([
            [
                callScope.current,
                { x: "-50%" },
                { duration: 30, ease: "linear", repeat: Infinity },
            ],
        ]);
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={callScope}
                    className="flex flex-none gap-16 text-7xl font-medium md:text-8xl group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 2 }).map((_, i) => (
                        <Fragment key={i}>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-16 pr-16"
                                >
                                    <span className="text-lime-400 text-7xl">
                                        &#10038;
                                    </span>
                                    <span className="group-hover:text-lime-400 duration-500 transition-all">
                                        Try it for free
                                    </span>
                                </div>
                            ))}
                        </Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

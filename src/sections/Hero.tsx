"use client";

import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        // Left Side Animations
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        // Right Side Animations
        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [rightPointerScope.current, { y: 0, x: 100 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, -16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className=" -left-32 top-16 hidden lg:block absolute"
                >
                    <Image
                        src={designExample1Image}
                        draggable="false"
                        alt="Design Example Image One"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="hidden lg:block absolute left-56 top-96"
                >
                    <Pointer name="andrea" color="blue" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    className="-right-64 -top-16 hidden lg:block absolute"
                >
                    <Image
                        src={designExample2Image}
                        draggable="false"
                        alt="Design Example Image Two"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 100, x: 300 }}
                    className="hidden lg:block absolute right-80 -top-4"
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-900  "
                    >
                        ✨ $9.5 seed round raised
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl"
                >
                    Impactful design, created effortlessly
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto"
                >
                    Design tools shouldn&rsquo;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <form
                        action=""
                        className="flex  border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-4 md:flex-1 focus:outline-none w-full"
                        />
                        <Button
                            variant="primary"
                            size="small"
                            className="whitespace-nowrap"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

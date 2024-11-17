import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className=" -left-32 top-16 hidden lg:block absolute">
                    <Image
                        src={designExample1Image}
                        alt="Design Example Image One"
                    />
                </div>
                <div className="-right-64 -top-16 hidden lg:block absolute">
                    <Image
                        src={designExample2Image}
                        alt="Design Example Image Two"
                    />
                </div>
                <div className="hidden lg:block absolute left-56 top-96">
                    <Pointer name="andrea" color="blue" />
                </div>
                <div className="hidden lg:block absolute right-80 -top-4">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-900  ">
                        ✨ $9.5 seed round raised
                    </div>
                </div>
                <h1 className="text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl">
                    Impactful design, created effortlessly
                </h1>

                <p className="text-center text-xl text-while/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&rsquo;t slow yo down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>

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
            </div>
        </section>
    );
}

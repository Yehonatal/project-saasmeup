import { FeatureCard } from "@/components/FeatureCard";
import { Tag } from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import { Avatar } from "@/components/Avatar";
import Image from "next/image";
import { Key } from "@/components/Key";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="font-medium text-6xl text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid gird-cols-1 gap-8  md:grid-cols-4 lg:grid-cols-3">
                    <FeatureCard
                        className="md:col-span-2 lg:col-span-1"
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free editing"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    className="rounded-full"
                                    src={avatar1}
                                    alt="Avatar 1"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    className="rounded-full"
                                    src={avatar2}
                                    alt="Avatar 2"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    className="rounded-full"
                                    src={avatar3}
                                    alt="Avatar 3"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1 ">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex rounded-full bg-white size-1.5"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react to
                            user actions."
                        className="md:col-span-2  lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We've achieved{" "}
                                <span className="bg-gradient-to-t from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth with year.
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        className="md:col-span-2 md:col-start-2  lg:col-span-1 lg:col-start-auto"
                        title="Keyboard Quick Actions"
                        description="Powerful command to help you create design more
                            quickly."
                    >
                        <div className="aspect-video gap-8 flex items-center justify-center">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2 md:text-lg"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function IntegrationsColumn(props: {
    integrations: IntegrationsType;
    className?: string;
}) {
    const { integrations, className } = props;
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4 ", className)}>
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
                    <h3 className="text-3xl text-center mt-6">{name}</h3>
                    <p className="mt-2 text-center text-white/50">
                        {description}
                    </p>
                </div>
            ))}
        </div>
    );
}

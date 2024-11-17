import { twMerge } from "tailwind-merge";

export function FeatureCard(props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-900 border border-white/10 p-6 rounded-3xl ",
                className
            )}
        >
            <div className="aspect-auto">{children}</div>
            <div>
                <h3
                    className={twMerge("text-3xl font-medium mt-6 ", className)}
                >
                    {title}
                </h3>
                <p className={twMerge("text-white/50 mt-2 ", className)}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function SectionHeader({
    label,
    title,
    description,
    align = "left",
    dark = false,
    className = ""
}) {
    const isCenter = align === "center";

    return (
        <div className={`space-y-1.5 sm:space-y-2 ${isCenter ? "text-center mx-auto" : ""} ${className}`.trim()}>
            {label && (
                <span className={`text-xs md:text-sm tracking-widest uppercase font-bold block ${dark ? "text-cyan-300" : "text-cyan-700"}`}>
                    {label}
                </span>
            )}
            {title && (
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight ${dark ? "text-white" : "text-[#002b40]"}`}>
                    {title}
                </h2>
            )}
            {description && (
                <p className={`text-sm md:text-base leading-relaxed ${dark ? "text-cyan-100/80" : "text-gray-500"} ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
                    {description}
                </p>
            )}
        </div>
    );
}


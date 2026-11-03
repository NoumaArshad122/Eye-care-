export default function Button({
    children,
    href,
    variant = "primary",
    size = "default",
    className = "",
    type = "button",
    onClick,
    ariaLabel,
    ...props
}) {
    const baseStyles = "whitespace-nowrap inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";

    const variantStyles = {
        primary: "bg-[#00897b] hover:bg-[#00796b] text-white shadow-sm",
        dark: "bg-[#002b40] hover:bg-[#003854] text-white shadow",
        outline: "border border-cyan-400 hover:bg-white hover:text-gray-900 text-white"
    };

    const sizeStyles = {
        default: "px-5 py-3 sm:px-6 md:px-7 md:py-3.5 text-sm md:text-base",
        sm: "px-3.5 py-1.5 md:text-xs lg:px-5 lg:py-2.5 lg:text-sm",
        full: "w-full py-3 sm:py-3.5 px-4 text-sm md:text-base rounded-lg"
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.default} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={combinedClassName} aria-label={ariaLabel} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName} aria-label={ariaLabel} {...props}>
            {children}
        </button>
    );
}

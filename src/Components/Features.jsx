import { Microscope, UserCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { FEATURES } from "../data/siteData";

const featureIcons = {
    Microscope: <Microscope className="h-6 w-6 text-cyan-700" aria-hidden="true" />,
    UserCheck: <UserCheck className="h-6 w-6 text-cyan-700" aria-hidden="true" />,
    HeartHandshake: <HeartHandshake className="h-6 w-6 text-cyan-700" aria-hidden="true" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6 text-cyan-700" aria-hidden="true" />
};

export default function Features() {
    return (
        <section className="w-full bg-[#e6f2f7] border-b border-[#d3e8f2] py-2 sm:py-6 md:py-8">
            <div className="mx-auto max-w-7xl pl-2 pr-3 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8">
                <h2 className="sr-only">Key Hospital Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8 items-center">
                    {FEATURES.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 bg-white/80 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none shadow-xs sm:shadow-none">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-cyan-100">
                                {featureIcons[item.iconName]}
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800 leading-snug sm:text-base">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

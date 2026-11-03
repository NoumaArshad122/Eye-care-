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
        <section className="w-full bg-[#e6f2f7] border-b border-[#d3e8f2] py-6 sm:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="sr-only">Key Hospital Features</h2>
                <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4 items-center">
                    {FEATURES.map((item) => (
                        <div key={item.id} className="flex items-center gap-3.5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-cyan-100">
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

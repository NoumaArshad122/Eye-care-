import React from "react";
import { Microscope, UserCheck, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Features() {
    const featureList = [
        {
            icon: <Microscope className="h-6 w-6 text-cyan-600" />,
            title: "Advanced Technology"
        },
        {
            icon: <UserCheck className="h-6 w-6 text-cyan-600" />,
            title: "Expert Doctors"
        },
        {
            icon: <HeartHandshake className="h-6 w-6 text-cyan-600" />,
            title: "Personalized Care"
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-cyan-600" />,
            title: "Trusted by Thousands"
        }
    ];

    return (
        <section className="w-full bg-[#e6f2f7] border-b border-[#d3e8f2] py-6 sm:py-8">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4 items-center">
                    {featureList.map((item, index) => (
                        <div key={index} className="flex items-center gap-3.5">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-cyan-100">
                                {item.icon}
                            </div>

                            <h4 className="text-sm font-semibold text-gray-800 leading-snug sm:text-base">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

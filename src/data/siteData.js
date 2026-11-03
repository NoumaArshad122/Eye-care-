import drAhmadImg from '../assets/dr-ahmad.webp';
import drSaraImg from '../assets/dr-sara.webp';
import drNazmulImg from '../assets/dr-nazmul.webp';
import drFatimaImg from '../assets/dr-fatema.webp';

export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Technology", href: "#technology" },
    { name: "Contact", href: "#contact" },
];

export const SERVICES = [
    {
        id: "eye-checkup",
        title: "Eye Checkup",
        description: "Regular checkups for better vision and eye health.",
        iconName: "Eye"
    },
    {
        id: "cataract-surgery",
        title: "Cataract Surgery",
        description: "Safe & advanced cataract surgery with quick recovery.",
        iconName: "Zap"
    },
    {
        id: "lasik-surgery",
        title: "LASIK Surgery",
        description: "Freedom from glasses and contact lenses.",
        iconName: "ScanSearch"
    },
    {
        id: "glaucoma-treatment",
        title: "Glaucoma Treatment",
        description: "Advanced care for long-term vision health.",
        iconName: "ShieldAlert"
    },
    {
        id: "retina-care",
        title: "Retina Care",
        description: "Expert diagnosis and treatment for retinal diseases.",
        iconName: "HeartPulse"
    },
    {
        id: "children-eye-care",
        title: "Children's Eye Care",
        description: "Gentle and specialized eye care for children.",
        iconName: "Baby"
    }
];

export const CONTACT = {
    phone: "+880 1234 567890",
    phoneDisplay: "+880 1234 567890",
    phoneTel: "+8801234567890",
    email: "info@eyehospital.com",
    address: "House #12, Road #5, Dhanmondi, Dhaka 1209",
    shortAddress: "Dhanmondi, Dhaka 1209"
};

export const SOCIAL_LINKS = [
    { name: "Facebook", href: "https://facebook.com", iconName: "Facebook" },
    { name: "Twitter", href: "https://twitter.com", iconName: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", iconName: "Linkedin" }
];

export const DOCTORS = [
    {
        id: "dr-ahmed-rahman",
        name: "Dr. Ahmed Rahman",
        specialty: "Ophthalmologist",
        image: drAhmadImg
    },
    {
        id: "dr-sara-khan",
        name: "Dr. Sara Khan",
        specialty: "Cataract Specialist",
        image: drSaraImg
    },
    {
        id: "dr-nazmul-hasan",
        name: "Dr. Nazmul Hasan",
        specialty: "Retina Specialist",
        image: drNazmulImg
    },
    {
        id: "dr-fatema-akter",
        name: "Dr. Fatema Akter",
        specialty: "Pediatric Ophthalmologist",
        image: drFatimaImg
    }
];

export const REVIEWS = [
    {
        id: "review-1",
        quote: "The team at Eye Hospital.com is truly amazing. My cataract surgery was smooth and I can see clearly now. Highly recommended!",
        name: "Sarah Ahmed",
        role: "Patient",
        initials: "SA",
        bgColor: "bg-teal-100 text-[#00897b]"
    },
    {
        id: "review-2",
        quote: "Very professional doctors and modern clinic facilities. The staff made me feel comfortable from day one. Best eye care in town.",
        name: "David Miller",
        role: "Patient",
        initials: "DM",
        bgColor: "bg-cyan-100 text-cyan-800"
    },
    {
        id: "review-3",
        quote: "Got LASIK surgery here last month. The recovery was fast, vision is 20/20, and the staff took care of every single detail.",
        name: "Priya Sharma",
        role: "Patient",
        initials: "PS",
        bgColor: "bg-emerald-100 text-emerald-800"
    },
    {
        id: "review-4",
        quote: "Exceptional glaucoma management. Dr. Nazmul and his team monitor my condition with advanced diagnostics and utmost care.",
        name: "Michael Chen",
        role: "Patient",
        initials: "MC",
        bgColor: "bg-blue-100 text-blue-800"
    },
    {
        id: "review-5",
        quote: "Brought my daughter for a routine eye checkup. The pediatric team was remarkably patient and made her feel comfortable throughout.",
        name: "Fatima Noor",
        role: "Patient",
        initials: "FN",
        bgColor: "bg-teal-100 text-[#00897b]"
    }
];

export const TECH_CARDS = [
    {
        id: "tech-oct",
        title: "OCT Scan",
        desc: "High-resolution imaging",
        iconName: "Eye"
    },
    {
        id: "tech-laser",
        title: "Femtosecond Laser",
        desc: "Precision & safety",
        iconName: "Zap"
    },
    {
        id: "tech-digital",
        title: "Digital Eye Testing",
        desc: "Fast & accurate",
        iconName: "ScanEye"
    },
    {
        id: "tech-ot",
        title: "Modern Operation Theater",
        desc: "World-class facilities",
        iconName: "ShieldPlus"
    }
];

export const FEATURES = [
    {
        id: "feat-tech",
        title: "Advanced Technology",
        iconName: "Microscope"
    },
    {
        id: "feat-doctors",
        title: "Expert Doctors",
        iconName: "UserCheck"
    },
    {
        id: "feat-care",
        title: "Personalized Care",
        iconName: "HeartHandshake"
    },
    {
        id: "feat-trust",
        title: "Trusted by Thousands",
        iconName: "ShieldCheck"
    }
];

export const BENEFITS = [
    "State-of-the-art technology",
    "Experienced and specialized doctors",
    "Comfortable and modern facilities",
    "Affordable and transparent pricing"
];

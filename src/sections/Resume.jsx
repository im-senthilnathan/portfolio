import TimelineItem from "../components/TimelineItem";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const Resume = () => {
    return (
        <div className="bg-white min-h-screen">
            <section
                id="resume"
                className="relative max-w-7xl mx-auto pt-24 py-6 px-4"
            >
                <h1 className="text-5xl text-center font-bold font-geom mb-20">
                    My <span className="text-accent font-poppins">Resume</span>
                </h1>

                {/* CONTINUOUS TIMELINE LINE */}
                <div className="hidden md:block absolute left-1/2 top-40 bottom-0 w-0.5 bg-accent -translate-x-1/2"></div>

                <div className="space-y-20 relative">

                    {/* EXPERIENCE */}
                    <TimelineItem
                        title="EXPERIENCE"
                        icon={Briefcase}
                        isLabel
                        side="right"
                    />

                    <TimelineItem
                        title="Frontend Developer | Freelance"
                        subtitle="Yuvan Tech – Kleer Project"
                        period="2025"
                        description="Worked as a frontend developer building user interfaces using React, TypeScript, and Chakra UI for a France-based background verification platform."
                        icon={Briefcase}
                        side="right"
                    />

                    <TimelineItem
                        title="Python | Internship"
                        subtitle="Elysium Technologies"
                        period="2022"
                        description="Completed an internship at Elysium Technologies, gaining hands-on experience in Python programming, debugging, and efficient problem-solving while contributing to team projects."
                        icon={Briefcase}
                        side="left"
                    />

                    {/* EDUCATION */}
                    <TimelineItem
                        title="EDUCATION"
                        icon={GraduationCap}
                        isLabel
                        side="left"
                    />

                    <TimelineItem
                        title="Master of Computer Applications"
                        subtitle="Madurai Kamaraj University"
                        period="2023 – Present"
                        description="Overall CGPA - 8.1"
                        icon={GraduationCap}
                        side="right"
                    />

                    <TimelineItem
                        title="Bachelor of Computer Science"
                        subtitle="Mannar Thirumalai Naicker College"
                        period="2020 – 2023"
                        description="Overall CGPA - 8.2"
                        icon={GraduationCap}
                        side="left"
                    />

                    {/* CERTIFICATION */}
                    <TimelineItem
                        title="CERTIFICATION"
                        icon={Award}
                        isLabel
                        side="right"
                    />

                    <TimelineItem
                        title="PHP & MySQL"
                        subtitle="Spoken Tutorial"
                        period="2022"
                        icon={Award}
                        side="left"
                    />

                </div>
            </section>
        </div>
    );
};

export default Resume;

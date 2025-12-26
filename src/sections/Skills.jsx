import SkillCard from "../components/SkillCard";

const skills = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "React", percentage: 70 },
    { name: "Tailwind", percentage: 90 },
    { name: "Java", percentage: 75 },
    { name: "Python", percentage: 60 },
    { name: "MySQL", percentage: 85 },
    { name: "MongoDB", percentage: 55 },
    { name: "Git & GitHub", percentage: 80 },
];

const Skills = () => {
    return (
        <div className="min-h-screen">
            <section
                id="skills"
                className="max-w-7xl mx-auto pt-24 px-4"
            >
                <h1 className="text-5xl text-center font-bold font-geom mb-16 drop-shadow-lg">
                    My Work <span className="text-accent font-poppins">Skills</span>
                </h1>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            percentage={skill.percentage}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;

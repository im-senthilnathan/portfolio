import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "SmartDine – QR Restaurant Ordering System",
        date: "Mar - May 2025",
        image: "/projects/smartdine.jpg",
        description:
            "A QR-based restaurant ordering system built using the MERN stack that allows customers to view menus and place orders digitally."
    },
    {
        title: "Kleer – Background Verification Platform",
        date: "Aug - Nov 2025",
        image: "/projects/next_js.jpg",
        description:
            "A web application developed for a France-based company to manage background verification workflows with role-based access."
    },
    {
        title: "Personal Portfolio Website",
        date: "Dec 2025",
        image: "/projects/portfolio.png",
        description:
            "My personal portfolio built using React, Tailwind CSS, and Framer Motion to showcase my skills and projects."
    }
];

const Projects = () => {
    return (
        <div className="bg-charcoal min-h-screen">
            <section
                id="projects"
                className="max-w-7xl mx-auto pt-24 pb-6 px-4"
            >
                <h1 className="text-5xl text-white font-bold font-geom mb-14 drop-shadow-lg">
                    Recent <span className="text-accent font-poppins">Projects</span>
                </h1>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            image={project.image}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;

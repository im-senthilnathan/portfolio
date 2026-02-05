import { Mail, Instagram, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image2.jpg";

const About = () => {
    return (

        <div className="min-h-screen">

            <section id="about" className=" max-w-7xl mx-auto md:mx-24 pt-16 px-4 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <img
                        src={heroImage}
                        alt="Senthil Nathan"
                        className="w-72 h-72 md:w-96 md:h-auto rounded-xl rounded-tr-[100px] object-cover shadow-2xl"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h1 className="text-5xl drop-shadow-lg text-black mb-4 font-bold font-geom">
                        About <span className="text-accent font-poppins">Myself</span>
                    </h1>

                    <p className="mb-2 max-w-lg font-semibold font-inter opacity-70">
                        I’m a passionate MCA graduate with a strong foundation in Full Stack Web Development (MERN Stack), SQL, and Core Java.
                    </p>
                    <p className="mb-6 max-w-lg font-semibold font-inter opacity-70">
                        I enjoy solving real-world problems through clean code and scalable applications. I’m always ready to learn new technologies, collaborate in a team, and grow as a developer.
                    </p>

                    <h2 className="mb-2 text-lg font-semibold font-inter opacity-60">
                        Phone
                    </h2>

                    <p className="mb-4 border-b border-gray-400 max-w-40 pb-4 font-semibold font-inter opacity-50">
                        +91 9994559047
                    </p>

                    <h2 className="mb-2 text-lg font-semibold font-inter opacity-60">
                        Email
                    </h2>

                    <p className="mb-4 border-b border-gray-400 max-w-40 pb-4 font-semibold font-inter opacity-50">
                        im.senthilnathan.dev@gmail.com
                    </p>

                    {/* Social Links */}

                    <div className="mt-6 flex items-center gap-6">
                        {/* Email */}
                        <a
                            href="mailto:im.senthilnathan.dev@gmail.com"
                            className="text-red-600 border-2 border-red-600 px-2 py-2 rounded-xl transition transform hover:text-white hover:bg-red-600 hover:-translate-y-1"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/im.senthilnathan_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fuchsia-600 border-2 border-fuchsia-600 px-2 py-2 rounded-xl transition transform hover:text-white hover:bg-fuchsia-600 hover:-translate-y-1"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/im-senthilnathan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 border-2 border-amber-600 px-2 py-2 rounded-xl transition transform hover:text-white hover:bg-amber-600 hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/im-senthilnathan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 border-2 border-blue-800 px-2 py-2 rounded-xl transition transform hover:text-white hover:bg-blue-800 hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>

                </motion.div>

            </section>
        </div>
    );
};

export default About;
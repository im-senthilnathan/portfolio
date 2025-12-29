import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-mist border-t border-gray-200">
            <div className="flex flex-col space-y-10 justify-center items-center max-w-7xl mx-auto px-4 py-6">

                <div className="text-center">
                    <h2 className="text-4xl font-bold font-poppins">
                        Senthil Nathan
                    </h2>
                    <p className="font-semibold text-accent text-center font-inter">
                        Software Developer
                    </p>
                </div>

                {/* CENTER – QUICK LINKS */}
                <div>
                    <ul className="md:flex space-y-4 text-center md:space-x-8 font-inter font-semibold">
                        <li><a href="#home" className="hover:text-accent transition">Home</a></li>
                        <li><a href="#about" className="hover:text-accent transition">About</a></li>
                        <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
                        <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
                        <li><a href="#resume" className="hover:text-accent transition">Resume</a></li>
                        <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
                    </ul>
                </div>

                <div>

                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com/im.senthilnathan_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border  flex items-center justify-center
                           hover:bg-accent hover:text-white hover:border-accent transition"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://github.com/im-senthilnathan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border  flex items-center justify-center
                           hover:bg-accent hover:text-white hover:border-accent transition"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border  flex items-center justify-center
                           hover:bg-accent hover:text-white hover:border-accent transition"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="mailto:im.senthilnathan.dev@gmail.com"
                            className="w-10 h-10 rounded-full border  flex items-center justify-center
                           hover:bg-accent hover:text-white hover:border-accent transition"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-200 py-6 text-center text-gray-400 text-sm font-inter">
                © {new Date().getFullYear()} Senthil Nathan. All rights reserved.
            </div>

        </footer >
    );
};

export default Footer;

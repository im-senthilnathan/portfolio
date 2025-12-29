import { useEffect, useState } from "react";

const Header = () => {
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Height of home section (adjust if needed)
            const homeHeight = document.getElementById("home")?.offsetHeight || 300;

            setShowShadow(window.scrollY > homeHeight - 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`bg-mist fixed top-0 left-0 w-full z-50
                  px-6 py-4 flex items-center justify-between
                  transition-shadow duration-300
                  ${showShadow ? "shadow-lg" : "shadow-none"}`}
        >
            {/* Left - Portfolio Text */}
            <h1 className="text-4xl font-poppins font-bold">
                Port<span className="text-accent">folio</span>
            </h1>

            {/* Right - Navigation */}
            <nav className="hidden font-poppins md:flex space-x-8 text-xl font-medium items-center">
                <a href="#home" className="hover:text-accent transition">Home</a>
                <a href="#about" className="hover:text-accent transition">About</a>
                <a href="#skills" className="hover:text-accent transition">Skills</a>
                <a href="#projects" className="hover:text-accent transition">Projects</a>
                <a href="#resume" className="hover:text-accent transition">Resume</a>
                <a href="#contact" className="hover:text-accent transition">Contact</a>
            </nav>
        </header>
    );
};

export default Header;

import { Sun } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-mist fixed top-0 left-0 min-w-screen z-50 rounded-b-4xl max-w-full px-6 py-4 flex items-center justify-between">

            {/* Left - Portfolio Text */}
            <h1 className="text-4xl font-poppins font-bold">
                Port<span className="text-accent">folio</span>
            </h1>

            {/* Right - Navigation */}
            <nav className="hidden font-poppins md:flex space-x-8 text-xl font-medium">
                <a href="#home" className="hover:text-accent transition">Home</a>
                <a href="#about" className="hover:text-accent transition">About</a>
                <a href="#skills" className="hover:text-accent transition">Skills</a>
                <a href="#projects" className="hover:text-accent transition">Projects</a>
                <a href="#education" className="hover:text-accent transition">Education</a>
                <a href="#contact" className="hover:text-accent transition">Contact</a>
                <Sun size={24} className="cursor-pointer text-amber-400" />
            </nav>

        </header>
    );
};

export default Header;

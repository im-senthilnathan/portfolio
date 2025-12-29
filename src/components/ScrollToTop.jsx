import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    // Show button only after scrolling
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    onClick={handleClick}
                    aria-label="Scroll to top"
                    className="hidden md:flex fixed bottom-6 right-6 z-50
                     items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {/* Floating animation */}
                    <motion.img
                        src="/arrow-up.jpg"
                        alt="Back to Home"
                        className="w-14 h-14 rounded-full shadow-lg cursor-pointer"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;

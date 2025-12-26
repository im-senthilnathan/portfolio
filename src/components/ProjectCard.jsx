import { motion } from "framer-motion";

const ProjectCard = ({ image, title, date, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl overflow-hidden
                 bg-white/10 backdrop-blur-lg
                 border border-white/20
                 shadow-xl hover:shadow-2xl
                 transition transform hover:-translate-y-3"
        >
            {/* Project Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 rounded-br-[80px] object-cover"
            />

            {/* Content */}
            <div className="p-6 text-white">
                <h3 className="text-xl font-poppins font-semibold mb-1">
                    {title}
                </h3>

                <p className="text-sm opacity-60 mb-3">
                    {date}
                </p>

                <p className="text-sm font-inter opacity-80 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

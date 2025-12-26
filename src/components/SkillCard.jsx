import { motion } from "framer-motion";

const SkillCard = ({ name, percentage }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center"
        >
            {/* Circular Progress */}
            <div className="relative w-36 h-36 mb-4">
                <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                >
                    {/* Background Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                    />

                    {/* Progress Circle */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="var(--color-accent)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                </svg>

                {/* Percentage Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Skill Name */}
                    <h3 className="font-inter font-semibold text-lg text-center">
                        {name}
                    </h3>
                    <span className="text-xl font-semibold font-poppins text-primary">
                        {percentage}%
                    </span>
                </div>
            </div>

        </motion.div>
    );
};

export default SkillCard;

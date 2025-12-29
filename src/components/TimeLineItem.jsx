import { motion } from "framer-motion";

const TimelineItem = ({
    title,
    subtitle,
    period,
    description,
    icon: Icon,
    side = "left",
    isLabel = false,
}) => {
    const isLeft = side === "left";

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start">

            {/* LEFT CONTENT */}
            <div className="flex justify-end pr-6">
                {isLeft && !isLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="p-5 max-w-md text-right"
                    >
                        <h3 className="text-lg font-poppins font-semibold text-accent">{title}</h3>
                        <p className="text-md font-semibold">{subtitle}</p>
                        <p className="text-sm opacity-50 mb-2">{period}</p>
                        {description && (
                            <p className="font-inter opacity-80">{description}</p>
                        )}
                    </motion.div>
                )}
            </div>

            {/* CENTER (DOT OR LABEL) */}
            <div className="relative flex justify-center">
                {isLabel ? (
                    <span
                        className="relative z-10 px-5 py-1 rounded-md bg-mist 
                       border border-gray-300 text-sm font-semibold 
                       tracking-widest"
                    >
                        {title}
                    </span>
                ) : (
                    <div className="relative z-10 w-9 h-9 rounded-full bg-primary 
                          text-white flex items-center justify-center">
                        <Icon size={16} />
                    </div>
                )}
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex justify-start pl-6">
                {!isLeft && !isLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="p-5 max-w-md"
                    >
                        <h3 className="text-lg text-accent font-poppins font-semibold">{title}</h3>
                        <p className="text-md font-semibold">{subtitle}</p>
                        <p className="text-sm opacity-50 mb-2">{period}</p>
                        {description && (
                            <p className="font-inter opacity-80">{description}</p>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TimelineItem;

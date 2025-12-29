import { Phone, Mail, Globe, MapPin, Instagram, Github, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            <section
                id="contact"
                className="max-w-7xl mx-auto pt-24 py-10 px-4"
            >
                <h1 className="text-5xl text-center font-bold font-geom mb-20">
                    <span className="text-accent font-poppins">Contact</span> Me
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* LEFT – CONTACT FORM */}
                    <div>
                        <form className="space-y-6">

                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Your Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Message"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-accent text-white px-8 py-3 rounded-xl rounded-tr-sm font-semibold hover:bg-primary transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* RIGHT – CONTACT INFO */}
                    <div>
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Contact
                        </span>

                        <h2 className="text-4xl font-bold font-poppins mt-2 mb-6">
                            Get In Touch
                        </h2>

                        <p className="text-gray-600 max-w-md mb-10">
                            Feel free to reach out for opportunities or to connect. I’m always open to learning and growing.
                        </p>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <Phone className="text-accent mt-1" />
                                <div>
                                    <p className="font-semibold">Call Me</p>
                                    <p className="text-gray-600">+91 99945 59047</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-accent mt-1" />
                                <div>
                                    <p className="font-semibold">Email Us</p>
                                    <p className="text-gray-600">
                                        im.senthilnathan.dev@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Globe className="text-accent mt-1" />
                                <div>
                                    <p className="font-semibold">Website</p>
                                    <p className="text-gray-600">
                                        im-senthilnathan.github.io
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-accent mt-1" />
                                <div>
                                    <p className="font-semibold">Address</p>
                                    <p className="text-gray-600">
                                        Madurai, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 mt-10">
                            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                <a
                                    href="https://linkedin.com/in/im-senthilnathan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin />
                                </a>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                <a
                                    href="https://github.com/im-senthilnathan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <Github />
                                </a>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                <a
                                    href="https://instagram.com/im.senthilnathan_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <Instagram />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import BlurText from '../Components/BlurText';
import premiumImg from '../assets/Images/premium-3.png';
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        category: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("https://formspree.io/f/xpqvpbvv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    category: formData.category || 'Not Selected',
                    message: formData.message,
                    subject: "New Job Request from Trevonka Contact Form"
                }),
            });

            if (response.ok) {
                setStatus("Message sent successfully! We will get back to you within 24 hours.");
                setFormData({ firstName: '', lastName: '', category: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
            } else {
                const data = await response.json();
                if (data.errors) {
                    setStatus(data.errors.map(error => error.message).join(", "));
                } else {
                    setStatus("Something went wrong. Please try again.");
                }
            }
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="w-full bg-[#0d0d0d] min-h-screen text-white font-sans">
            {/* Top Hero Section */}
            <section className="w-full pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: Large Portrait Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[45%] xl:w-[40%]"
                    >
                        <div className="w-full aspect-[4/5] bg-[#1a1a1a] overflow-hidden rounded-sm">
                            <img
                                src={premiumImg}
                                alt="Contact Hero"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col pt-8 lg:pt-16">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
                            <BlurText
                                text="Get In Touch”"
                                delay={30}
                                animateBy="words"
                                direction="bottom"
                            />
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-white/50 text-sm md:text-base font-light max-w-md mb-16 leading-relaxed"
                        >
                            Pick a plan, submit a job request, and your next project will kickoff within 24 hours.
                        </motion.p>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col gap-10"
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* First Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-bold text-white uppercase tracking-wider">First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Jim"
                                        className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-white/30"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-bold text-white uppercase tracking-wider">Last Name*</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Hopper"
                                        className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-white/30"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Category Dropdown */}
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[11px] font-bold text-white uppercase tracking-wider">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors text-sm appearance-none cursor-pointer text-white placeholder:text-white/30"
                                    >
                                        <option value="" disabled hidden className="text-white/30 bg-[#0d0d0d]">Select</option>
                                        <option value="Web Design" className="bg-[#1a1a1a] text-white">Web Design</option>
                                        <option value="Development" className="bg-[#1a1a1a] text-white">Development</option>
                                        <option value="Branding" className="bg-[#1a1a1a] text-white">Branding</option>
                                    </select>
                                    <div className="absolute right-0 top-[60%] pointer-events-none text-white/50 text-xs">
                                        ▼
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-bold text-white uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Trevonkastudios@mail.com"
                                        className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-white/30"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2 pt-4">
                                <label className="text-[11px] font-bold text-white uppercase tracking-wider">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your message..."
                                    rows="1"
                                    className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-white/30 resize-y min-h-[40px]"
                                ></textarea>
                                <div className="w-full flex justify-end">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 -mt-2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    disabled={status === "Sending..."}
                                    className="w-full md:w-[80%] lg:w-[60%] bg-[#2a2a2a] hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white py-4 text-[13px] font-medium tracking-wide flex justify-center items-center rounded-sm"
                                >
                                    {status === "Sending..." ? "Sending..." : "Submit"}
                                </button>
                                {status && status !== "Sending..." && (
                                    <p className={`mt-4 text-[12px] font-medium ${status.includes("successfully") ? "text-[#b9ff66]" : "text-red-400"}`}>
                                        {status}
                                    </p>
                                )}
                            </div>

                        </motion.form>
                    </div>
                </div>
            </section>

            {/* Middle FAQ Section (White) */}
            <FAQ />

            {/* Bottom Footer Section (Dark) */}
            <Footer />

        </div>
    );
};

export default Contact;

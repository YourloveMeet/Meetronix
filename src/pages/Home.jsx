import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>

            <section id="skills" className="section-padding">
                <Skills />
            </section>

            <section id="projects" className="section-padding">
                <Projects />
            </section>

            <section id="contact" className="section-padding">
                <Contact />
            </section>
        </>
    );
};

export default Home;

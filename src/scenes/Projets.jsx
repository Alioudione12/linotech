import LinearGradient from "../components/LinearGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/project-1.jpeg";
import Project2 from "../assets/project-2.jpeg";
import Project3 from "../assets/project-3.jpeg";
import Project4 from "../assets/project-4.jpeg";
import Project5 from "../assets/project-5.jpeg";
import Project6 from "../assets/project-6.jpeg";
import ProjectsItem from "./ProjectsItem";

const Projets = () => {
    return (
        <section id="projets" className="pt-16 pb-20">
        {/* Header */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y: 0}
                }}>
                <div>
                    <p className="font-playfair font-semibold text-xl">
                    NOS <span className="text-green">PROJETS</span>
                    </p>
                    <div className="flex justify-center mt-5">
                    <LinearGradient width="w-4/5"/>
                    </div>
                </div>
                <p className="mt-4 mb-4">
                Voici quelques projets que j'ai réalisés. 
                </p>
            </motion.div>
            {/* projects */}
            <div className="justify-center">
                <div className=" grid sm:grid-cols-3 gap-10 ">
                <ProjectsItem img={Project1} title="Assuerplus" description=" Passionné de nouvelles technologies, j'exerce en tant que développeur front-end multifonctionnel et afin d'étoffer mes expériences"/>
                <ProjectsItem img={Project2} title="ecommerce" description=" salut paris"/>
                <ProjectsItem img={Project3} title="Hotels" description=" je vais au taff"/>
                <ProjectsItem img={Project4} title="react native appli" description=" code dev all"/>
                <ProjectsItem img={Project5} title="react native appli" description=" code dev all"/>
                <ProjectsItem img={Project6} title="Une App" description="une appli multi-platform disponible sur Store et Androide"/>
                </div>
            </div>
        </section>
    )
}
export default Projets;
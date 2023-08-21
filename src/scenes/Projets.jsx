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
                    <div className="flex justify-center mt-2">
                    <LinearGradient width="w-4/5"/>
                    </div>
                </div>
                <p className="mt-30 mb-4">
                Voici quelques projets que j'ai réalisés. 
                </p>
            </motion.div>
            {/* projects */}
            <div className="justify-center">
                <div className=" grid sm:grid-cols-3 gap-10 ">
                <ProjectsItem img={Project1} title="Site d'actualité " description=" Toute l'actu en direct et en continu"/>
                <ProjectsItem img={Project2} title="Site E-commerce" description=" Cette solution de commerce électronique qui permet aux utilisateurs effectués du shopping vêtements"/>
                <ProjectsItem img={Project3} title="D'assurance auto" description="Cet site web personnalise l'assurance automobile en choisissant les garanties complémentaires qui correspondent à vos besoins des utilisateurs"/>
                <ProjectsItem img={Project4} title="Fashion et Mode" description="Un site spécialisé dans la mode et les vêtements de créateurs de grandes maisons de couture."/>
                <ProjectsItem img={Project5} title="Restauration" description="une solution qui vous fera gagner du temps dans la gestion du restaurant et les réservations au quotidien"/>
                <ProjectsItem img={Project6} title="Reservation Hotels et restaurant " description="Une application touristique dans le secteur des voyages multi-platform disponible sur Store et Androide permet la reservation hotels et restaurants dans toutes les villes "/>
                </div>
            </div>
        </section>
    )
}
export default Projets;
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
                <ProjectsItem img={Project1} title="Site d'actualité " description="Un Site Actualité qui permette de poster des nouveautés de l'actualité international."/>
                <ProjectsItem img={Project2} title="Site E-commerce" description="Une application d’e-commerce, qui permet aux utilisateurs d'acheter des produits en ligne, de suivre leur commande et de gérer leur compte."/>
                <ProjectsItem img={Project3} title="D'assurance auto" description="Cet site web personnalise l'assurance automobile en choisissant les garanties complémentaires qui correspondent à vos besoins des utilisateurs"/>
                <ProjectsItem img={Project4} title="Tripsen" description="Une Solution qui permet la gestion de logement et hotels dans tous les pays en afrique"/>
                <ProjectsItem img={Project5} title="Restauration" description="Un site de recettes de cuisine où les utilisateurs peuvent partager leurs recettes, les noter, les commenter et les sauvegarder dans leurs favoris."/>
                <ProjectsItem img={Project6} title="App de réservation de voyages " description="Un site web de réservation de voyages qui permet aux utilisateurs de rechercher et de réserver des vols, des hôtels et des activités en ligne."/>
                </div>
            </div>
        </section>
    )
}
export default Projets;
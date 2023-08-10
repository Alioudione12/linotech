import LinearGradient from "../components/LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Skill from "../assets/skills-image.png";

const Services = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="services" className="pt-10 pb-24">
        {/* headers and images section */}
            <div className="md:flex md:justify-between md:gap-16 mt-10">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}>

                    <p className="font-playfair font-semibold text-xl mb-5">
                    NOS SERVICES<span className="text-green"> ET EXPERTISES </span>
                    </p>
                    <LinearGradient width="w-4/5"/>
                    <p className="mt-10 mb-2">
                    Feuille de route | Python | JavaScript | React  | Django | Nodejs | Mysql 
                    | PostgreSQL | MongoDB | API | tailwindCSS | Css | Html | React Native | Agile | 
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="
                            relative 
                            z-0 
                            ml-20 
                            before:absolute 
                            before:-top-10 
                            before:-left-10
                            before:w-full 
                            before:h-full
                            before:z-[-1]">
                        <img 
                            alt="skill" src={Skill}
                            className="z-10"
                        />
                    </div>
                    ):(
                        <img 
                            alt="skill" src={Skill}
                            className="z-10"
                        />
                    )}
                </div>
            </div>
            {/* kills */}
            <div className="md:flex md:justify-between mt-10 gap-10">
            {/* experience */}
            <motion.div
                className="md:w-1/3 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
            >
                <div className="relative h-32 bg-green p-2">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-2xl">#1</p>
                    <p className="font-playfair font-semibold text-2xl mt-3">Recueil des exigences</p>
                </div>
                </div>
                <p className="mt-0">
                Nous suivons la première et principale priorité de 
                rassembler les exigences, les ressources et informations 
                pour commencer votre projet d'application.
                </p>
            </motion.div>

            {/* innovative */}
            <motion.div
                className="md:w-1/3 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
            >
                <div className="relative h-32 bg-green p-2">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-2xl">#2</p>
                    <p className="font-playfair font-semibold text-2xl mt-3">Développement solution</p>
                </div>
                </div>
                <p className="mt-2">
                Développement d'application mobile/web commencé à 
                utiliser les derniers outils et technologies 
                avec transparence comme React, Nodejs, React Native.
                </p>
            </motion.div>

            {/* imaginative */}
            <motion.div
                className="md:w-1/3 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
            >
                <div className="relative h-32 bg-green p-2">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-2xl">#3</p>
                    <p className="font-playfair font-semibold text-2xl mt-3">Déploier et Maintenance</p>
                </div>
                </div>
                <p className="mt-2">
                Après l'essai et après tous les processus, 
                votre application mobile/web sont prêtes à être lancée 
                sur un hébergeur app Store ou le Play Store.
                </p>
            </motion.div>
            </div>
        </section>
    )

}
export default Services;
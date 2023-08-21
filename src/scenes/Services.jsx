import LinearGradient from "../components/LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Skill from "../assets/skills-image.png";
import {CgWebsite} from "react-icons/cg";
import {FaMobileAlt} from "react-icons/fa";
import {GrSettingsOption} from "react-icons/gr";

const Services = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="services" className="pt-6 pb-20">
        {/* headers and images section */}
            <div className="md:flex md:justify-between md:gap-16 mt-10">
                <div
                    className="md:w-1/3">
                    <p className="font-playfair font-semibold text-xl mb-5">
                    NOS SERVICES<span className="text-green"> ET EXPERTISES </span>
                    </p>
                    <LinearGradient width="w-4/5"/>
                    <h1 className="text-green font-playfair text-xl font-bold">Technologies</h1>
                    <p className="mt-4 mb-2">
                    Python | JavaScript | React  | Django | Nodejs | Mysql 
                    | PostgreSQL | MongoDB | API | tailwindCSS | Css | Html | React Native
                    </p>
                </div>

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
                <div className="relative h-32 bg-green p-2 text-white">
                <div className="z-10">
                    <CgWebsite className=" text-blackLight" size={30}/>
                    <p className="font-playfair font-semibold text-2xl mt-3">Web Development</p>
                </div>
                </div>
                <h1 className="font-bold mt-1 font-playfair">WEB PRESTATIONS DE SERVICE</h1>
                <div className="mt-2">
                <li> Applications Web personnalisées</li>
                <li> Applications de l'entreprise</li>
                <li> Commerce électronique</li>
                <li> Système de gestion de contenu</li>
                </div>
                
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
                <div className="relative h-32 bg-green p-2 text-white">
                <div className="z-10">
                <FaMobileAlt className=" text-blackLight" size={30}/>
                    <p className="font-playfair font-semibold text-2xl mt-3"> Mobile Development</p>
                </div>
                </div>
                <h1 className="font-bold mt-1 font-playfair">NOTRE EXPÉRIENCE, À VOTRE SERVICE</h1>
                <p className="mt-2">
                Nous concevons des solutions mobiles qui répondront aux 
                besoins et aux objectifs de votre entreprise. Notre 
                expérience couvre le développement d'applications 
                mobiles natives, multiplateformes et hybrides.
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
                <div className="relative h-32 bg-green p-2 text-white">
                <div className="z-10">
                <GrSettingsOption className=" text-blackLight" size={30}/>
                    <p className="font-playfair font-semibold text-2xl mt-3">Solutions logicielles</p>
                </div>
                </div>
                <h1 className="font-bold font-playfair">NOS SERVICES DE DÉVELOPPEMENT DE LOGICIELS PERSONNALISÉS</h1>
                <div className="mt-2">
                <li> Architecture et conception</li>
                <li> Conception et l'interaction</li>
                <li> Développement et mise en œuvre</li>
                <li> Documentation technique et utilisateur</li>
                <li> Entretien et assistance</li>
                </div>
            </motion.div>
            </div>
        </section>
    )

}
export default Services;
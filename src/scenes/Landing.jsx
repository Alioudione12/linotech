import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import ProfilePhoto from "../assets/linotechPro.png";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="accueil" 
            className="
                md:flex 
                md:justify-between 
                md:items-center 
                md:h-full 
                gap-16 
                py-16">
            {/* image section */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="
                        relative 
                        filter
                        saturate-200
                        z-0 
                        ml-20 
                        before:absolute 
                        before:-top-20 
                        before:-left-20
                        before:rounded-t-[400px] 
                        before:w-full 
                        before:max-w-[400px] 
                        before:h-full
                        before:z-[-1]">
                        <img 
                            alt="profile" src={ProfilePhoto}
                            className="
                            hover:filter 
                            hover:saturate-200 
                            transition 
                            duration-500 
                            z-10 
                            w-full
                            max-w-[450px] 
                            md:max-w-[650px] 
                            "
                        />
                    </div>
                ):(
                    <img 
                        alt="profile" src={ProfilePhoto}
                        className="
                            hover:filter 
                            hover:saturate-200 
                            transition 
                            duration-500 
                            z-10 
                            w-full
                            max-w-[450px] 
                            md:max-w-[650px] 
                            "
                        />
                )}
                </div>
                {/* main text section */}
                <div className="z-30 basis-3/5 mt-12 md:mt-32">
                    {/* headind section */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0}
                        }}
                    >
                    <p className="text-2xl font-playfair z-10 text-center md:text-start text-white">
                        LinoTech |{" "}
                        <span className="xs:relative z-20
                         before:absolute before:-left-[25px] 
                        before:-top-[70px] before:z-[-1] text-green font-playfair text-2xl"
                        >
                        Shape the future
                        </span>
                    </p>
                    
                    <p className="mt-10 mb-7 text-md text-start md:text-start">
                    Linotech est spécialisé dans le développement full stack et le JavaScript python
                    ensuite, plus particulièrement dans les librairies comme Django, React NodeJS et React Native.
                    Au-delà des prestations proposées traditionnellement par 
                    les intégrateurs, nous offrons à nos clients la souplesse d'un 
                    service informatique partiellement ou totalement externalisé, parfaitement 
                    adapté à leur mode de fonctionnement, leur apportant ainsi une totale 
                    agilité : maîtrise des coûts, équipe pluridisciplinaire expérimentée, 
                    infrastructure flexible et évolutive, sécurité et optimisations des 
                    investissements informatiques. Les systèmes d'information sont aujourd'hui 
                    incontournables dans la chaîne de création de valeur des entreprises, 
                    quelles que soient leurs tailles ou les secteurs d'activité dans lesquels 
                    elles évoluent.
                    </p>
                    </motion.div>

                    {/* call to action */}

                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.4, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0}
                        }}
                    >
                    <SocialMediaIcons/>
                    </motion.div>
                </div>

        </section>
    )

}
export default Landing;
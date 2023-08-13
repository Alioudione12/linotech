import LinearGradient from "../components/LinearGradient";
import { motion } from "framer-motion";

const Temoignages = () => {
    return (
        <section id="temoignages" className="pt-20 pb-20">
        {/* Heading */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}>

                <p className="font-playfair font-semibold text-xl mb-2">
                LES TÉMOI<span className="text-green">GNAGES</span>
                </p>
                <LinearGradient width="mx-auto w-4/5"/>
                <p className="mt-4 ">
                Voici ce qu'ils disent de LinoTech
                </p>
            </motion.div>

            {/* testimonials */}
            <div className="md:flex md:justify-between gap-8 mt-0">
                <motion.div 
                    className="mx-auto relative bg-green max-w-[400px] h-[350px] flex flex-col justify-end p-4 mt-36
                    before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}> 

                    <p className="font-playfair text-4xl ">“</p>
                    <p className=" text-start text-md text-blackLight">
                    Super en développement d'application mobile/web! Nous avions initialement engagé 
                    un autre développeur pour notre site d'e-commerce. Le travail 
                    délivré était très peu qualitatif. Linotech a extrêmement bien 
                    rattrapé le coup! Il est super réactif, professionnel et impliqué. 
                    Je retravaillerai avec lui sur des futurs projets sans hésiter, 
                    et le recommande vivement
                    </p>
                </motion.div>

                <motion.div 
                    className="mx-auto relative bg-green max-w-[400px] h-[350px] flex flex-col justify-end p-4 mt-36
                    before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                > 
                    <p className="font-playfair text-4xl">“</p>
                    <p className=" text-start text-md text-blackLight">
                    Nous avons contacté Linotech pour développer un module de produit 
                    personnalisé. Linotech est un vrai développeur, qui ne sous-traite 
                    pas son travail et qui maîtrise son sujet. Les délais sont 
                    toujours respectés. D'ailleurs, il s'occupe aujourd'hui de la maintenance 
                    du site à l'année. Vous l'aurez compris, nous recommandons 
                    fortement Linotech.
                    </p>
                </motion.div>

                <motion.div 
                    className="mx-auto relative bg-green max-w-[400px] h-[350px] flex flex-col justify-end p-4 mt-36
                        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                > 
                    <p className="font-playfair text-4xl">“</p>
                    <p className=" text-start text-md text-blackLight">
                    Linotech est non seulement très compétent techniquement en e-commerce. Mais il a aussi une 
                    très bonne compréhension des enjeux marketing, d'image, s
                    ales de ses clients. De plus, Linotech est une personne courtoise, 
                    organisée, force de propositions, efficace de la résolution de problèmes informatique.
                    </p>
                </motion.div>

            </div>
        </section>
    )
};
export default Temoignages;
import useMediaQuery from "../hooks/useMediaQuery";
import ProfilePhoto from "../assets/linotechPro.png";


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
                py-10">
            {/* image section */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-10 md:mt-20">
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
                            max-w-[500px] 
                            md:max-w-[600px] 
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
                            max-w-[500px] 
                            md:max-w-[600px] 
                            "
                        />
                )}
                </div>
                {/* main text section */}
                <div className="z-30 basis-4/5 mt-10 md:mt-20">
                    {/* headind section */}
                    <div 
                    >
                    <p className="text-2xl font-playfair z-10 text-center md:text-start">
                        LinoTech |{" "}
                        <span className="xs:relative z-20
                         before:absolute before:-left-[25px] 
                        before:-top-[70px] before:z-[-1] text-green font-playfair text-2xl"
                        >
                        Shape the future
                        </span>
                    </p>
                    
                    <p className="mt-10 mb-4 text-md text-start md:text-start">
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
                    </div>
                </div>

        </section>
    )

}
export default Landing;
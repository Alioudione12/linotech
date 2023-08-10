import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup =({selectedPage, setSelectedPage}) => {
    const selectedStyles =`relative bg-green before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-green before:left-[-50%] before:top-[-50%]`



    return(
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink
            className={`${selectedPage === 'accueil' ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            href="#accueil"
            onClick={() => setSelectedPage('accueil')}>
        </AnchorLink>
        <AnchorLink
            className={`${selectedPage === 'services' ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            href="#services"
            onClick={() => setSelectedPage('services')}>
        </AnchorLink>
        <AnchorLink
            className={`${selectedPage === 'projets' ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            href="#projets"
            onClick={() => setSelectedPage('projets')}>
        </AnchorLink>
        <AnchorLink
            className={`${selectedPage === 'temoignages' ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            href="#temoignages"
            onClick={() => setSelectedPage('temoignages')}>
        </AnchorLink>
        <AnchorLink
            className={`${selectedPage === 'contact' ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
            href="#contact"
            onClick={() => setSelectedPage('contact')}>
        </AnchorLink>
        </div>
    )

}

export default DotGroup;
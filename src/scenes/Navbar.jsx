import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import {BiMenu} from "react-icons/bi";
import {MdClose} from "react-icons/md";
//import LogoPhoto from "../assets/LogoTech.png";

const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-green" : ""} hover:text-green transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens  = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-blackLight";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-xl font-bold text-green">LinoTech</h4>
                {/* <h4 className="font-playfair text-xl ">Mr. Aliou Dione</h4> */}
                {/* DESKTOP NAV  */}
                {isAboveSmallScreens ? (
                    <div className="
                        flex 
                        justify-between 
                        gap-16 
                        font-opensans 
                        text-sm 
                        font-semibold">
                        <Link
                        page="Accueil"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Services"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Projets"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Temoignages"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>
                    </div>
                ) : (
                    // MOBILE NAV
                    <button
                        className="rounded-full bg-deep-blue p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <BiMenu className=" text-green" size={30}/>
                    </button>
                )}
                {/* MOBILE MENU POP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[250px]">
                    {/* close icon */}
                        <div className="flex justify-end p-12">
                            
                            <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                <MdClose className=" text-green" size={30}/>
                            </button>
                        </div>
                        {/* menu items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
                        <Link
                        page="Accueil"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Services"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Projets"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Temoignages"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                        <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
};
export default Navbar;
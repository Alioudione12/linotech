
import {BsGithub} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";

const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7 text-green">

            {/* linkedin */}
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/aliou-dione-b77263193/"
                target="_blank"
                rel="noreferrer">
                <AiFillLinkedin size={30}/>
            </a>

            {/* github */}
            <a className="hover:opacity-50 transition duration-500"
                href="https://github.com/Alioudione12"
                target="_blank"
                rel="noreferrer">
                <BsGithub size={30}/>
            </a>
                {/* Twitter */}
                <a className="hover:opacity-50 transition duration-500"
                href="/"
                target="_blank"
                rel="noreferrer">
                <AiFillTwitterSquare size={30}/>
            </a>

            
                {/* FaInstagramSquare */}
                <a className="hover:opacity-50 transition duration-500"
                href="/"
                target="_blank"
                rel="noreferrer">
                <FaInstagramSquare size={30}/>
            </a>
        </div>
    )
}
export default SocialMediaIcons;


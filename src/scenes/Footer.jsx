import SocialMediaIcons from "../components/SocialMediaIcons";
import LinearGradient from "../components/LinearGradient";
const Footer = () => {
    return(
        <footer className="h-20 pt-20">
      <div className="w-10/12 mx-auto ">
      <LinearGradient width="w-full"/>
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center text-white ">
          <p className="text-md text-deep-blue">
            LinoTech is a software development company based in Paris, France.
             <p className=" text-deep-blue">Mr. Dione | founder of Linotech</p>
          </p>
          <p className="text-md text-deep-blue">
            ©2023 LinoTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    )

};
export default Footer;
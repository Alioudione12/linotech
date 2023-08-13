import SocialMediaIcons from "../components/SocialMediaIcons";
import LinearGradient from "../components/LinearGradient";
const Footer = () => {
    return(
      <footer className="h-10 bg-blackLight ">
      <div className="w-full bg-blackLight pr-4 pl-4 pb-4">
      <LinearGradient width="w-full"/>
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center text-white ">
          <p className="text-md text-deep-blue ">
            LinoTech is a software development company based in Paris, France.
            </p>
             <p className=" text-deep-blue">Mr. Dione | founder of Linotech</p>
          <p className="text-md text-deep-blue">
            ©2023 LinoTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    )

};
export default Footer;
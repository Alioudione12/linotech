import LinearGradient from "../components/LinearGradient";
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";
import ContactPhoto from "../assets/contact-image.png";


const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors},
    } = useForm();

    const onSubmit = async (e)=>{
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (

        <section id="contact" className="py-10">
            {/*HEADING  */}
            <div
                className="justify-end w-full p-5">
                <div>
                    <p className="font-playfair font-semibold text-xl mb-2">
                    CONTACTEZ <span className="text-green text-xl"> NOUS POUR COMMENCER</span>
                    </p>
                    <div className="flex md:justify-end my-2">
                    <LinearGradient width="mx-auto w-2/5"/>
                    </div>
                    <p>
                    Parlez-nous un peu de vous et de votre projet. 
                    Nous sommes là pour vous aider à relever les défis de la conception et 
                    du développement. Utilisez le formulaire.
                    </p>
                </div>

                {/*form and image section  */}
                <div className="md:flex md:justify-between gap-8 mt-5">
                    <motion.div
                        className="basis-1/2 flex justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                    >
                    <img alt="contact" src={ContactPhoto} className="rounded-xl"/>
                    </motion.div>
                    <div
                        className="basis-1/2 mt-10 md:mt-0">
                    <form 
                        target="_blank"
                        onSubmit = {onSubmit}
                        action="https://formsubmit.co/dionealiou88@gmail.com"
                        method="POST"
                    >
                        <input 
                            className="w-full bg-gray-50 p-3 border-b-2 border-green focus:outline-none focus:border-green"
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true, maxLength: 100 })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "Your name is required"}
                                {errors.name.type === "maxLength" && "Your name is too long"}
                            </p>
                        )}

                        <input
                            className="w-full bg-gray-50 p-3 mt-5 border-b-2 border-green focus:outline-none focus:border-green "
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "email is required"}
                                {errors.email.type === "pattern" && "invalid email address"}
                            </p>
                        )}

                        <textarea
                            className="w-full bg-gray-50 p-3 mt-5 border-b-2 border-green focus:outline-none focus:border-green"
                            type="message"
                            placeholder="Message"
                            rows="5"
                            cols="50"
                            {...register("message", { required: true, maxLength: 2000 })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" && "message is required"}
                                {errors.message.type === "maxLength" && "Your message is too long"}
                            </p>
                        )}

                        <button 
                            type="submit"
                            className="p-4 bg-green mt-5 hover:bg-blackLight hover:text-green transition duration-500"
                            >
                            Envoyer message
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Contact;
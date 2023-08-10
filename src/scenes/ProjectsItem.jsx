
const ProjectsItem = ({img, title, description}) => {
    return(
        <div className="relative flex items-center justify-center h-auto w-full rounded-lg group hover:bg-green">
            <img src={img} alt="" className=" rounded-lg group-hover:opacity-10 h-auto w-full"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-l font-bold tracking-wide text-start">{title}</h3>
                <p className="pb-2 pt-2 text-star text-blackLight">{description}</p>
                <a href="/">
                    <p className="text-center p-2 bg-white font-semibold cursor-pointer text-blackLight">Voir Project</p>
                </a>
            </div>
        </div>
    )
}
export default ProjectsItem;
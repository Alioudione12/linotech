
const ProjectsItem = ({img, title, description}) => {
    return(
        <div className="relative flex items-center justify-center h-auto w-full rounded-lg group hover:bg-green">
            <img src={img} alt="" className=" rounded-lg group-hover:opacity-10 h-auto w-full"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-l font-bold tracking-wide text-start">{title}</h3>
                <p className="pt-2 text-start text-blackLight">{description}</p>
            </div>
        </div>
    )
}
export default ProjectsItem;
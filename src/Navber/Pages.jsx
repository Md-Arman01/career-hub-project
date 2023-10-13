import { NavLink } from "react-router-dom";


const Pages = () => {
    return (
        <div className="flex gap-5 ">
            <NavLink to='/' className={({ isActive}) => isActive ? "text-[#9873FF] text-xs font-medium" : "text-xs font-medium"} >Statistics</NavLink>
            <NavLink to='/applied' className={({ isActive}) => isActive ? "text-[#9873FF] text-xs font-medium" : "text-xs font-medium"}>Applied Jobs</NavLink>
            <NavLink to='/blog' className={({ isActive}) => isActive ? "text-[#9873FF] text-xs font-medium" : "text-xs font-medium"}>Blog</NavLink>
        </div>
    );
};

export default Pages;
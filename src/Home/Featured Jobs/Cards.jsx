import PropTypes from "prop-types"
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Cards = ({data}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary,} = data;


    return (
        <div className="border border-gray-200 rounded-lg p-10 text-left">
            <img src={logo} alt="" />
            <h1 className="text-[#474747] text-xl font-bold mt-5">{job_title}</h1>
            <p className="text-[#757575] text-sm font-medium my-2">{company_name}</p>
            <div className="flex gap-3 my-2">
            <button className="btn normal-case bg-white border border-[#7E90FE]  hover:bg-[#7E90FE] hover:text-white text-[#7E90FE] font-bold rounded-md px-5">{remote_or_onsite}</button>
            <button className="btn normal-case bg-white border border-[#7E90FE]  hover:bg-[#7E90FE] hover:text-white text-[#7E90FE] font-bold rounded-md px-5">{job_type}</button>
            </div>
            <div className="flex items-center gap-10 mb-4">
                <div className="flex gap-2 items-center">
                    <SlLocationPin></SlLocationPin>
                    <p>{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <AiOutlineDollar></AiOutlineDollar>
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/featuredJobs/${id}`}>
            <button className="btn normal-case bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 ">View Details</button>
            </Link>
        </div>
    );
};
Cards.propTypes = {
    data: PropTypes.object.isRequired
}
export default Cards;
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from 'react-icons/ai';
import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';


const ViewDetails = () => {

    const allData = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const data = allData.find(data => data.id === idInt)
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title,contact_information    } = data

    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center mt-10">Job Details</h1>
            <div className="container mx-auto flex items-center gap-4 h-[600px]">
            {/* left side content */}
            <div className="w-2/3 space-y-4 h-fit">
            <p>
                <span className="text-sm font-extrabold">Job Description: </span>
                <span className="text-xs font-medium text-[#757575]">{job_description}</span>
            </p>
            <p>
                <span className="text-sm font-extrabold">Job Responsibility: </span>
                <span className="text-xs font-medium text-[#757575]">{job_responsibility}</span>
            </p>
            <h1 className="text-sm font-extrabold">Educational Requirements:</h1>
            <p className="text-xs font-medium text-[#757575]">{educational_requirements}</p>
            <h1 className="text-sm font-extrabold">Experiences:</h1>
            <p className="text-xs font-medium text-[#757575]">{experiences}</p>
            </div>
            {/* right side content */}
            <div className="w-1/3">
                <div className=" bg-[#F4F1FF] rounded-md p-7 h-fit">
                <h1 className="text-xl font-extrabold border-b border-[#9873FF] pb-4">Job Details</h1>
                <div className="my-4 space-y-1">
                <div className="flex items-center gap-1">
                    <AiOutlineDollar className="text-[#9873FF]"></AiOutlineDollar>
                    <h1>
                    <span className="text-sm font-bold">Salary : </span>
                    <span className="text-xs font-medium text-[#757575]">{salary} (Per Month)</span>
                    </h1>
                </div>
                <div className="flex items-center gap-1">
                    <IoCalendarOutline className="text-[#9873FF]"></IoCalendarOutline>
                    <h1>
                    <span className="text-sm font-bold">Job Title : </span>
                    <span className="text-xs font-medium text-[#757575]">{job_title}</span>
                    </h1>
                </div>
                </div>
                    <h1 className="text-xl font-extrabold border-b border-[#9873FF] pb-4">Contact Information</h1>
                    <div className="mt-4 space-y-1">
                <div className="flex items-center gap-1">
                    <IoCallOutline className="text-[#9873FF]"></IoCallOutline>
                    <h1>
                    <span className="text-sm font-bold">Phone : </span>
                    <span className="text-xs font-medium text-[#757575]">{contact_information.phone}</span>
                    </h1>
                </div>
                <div className="flex items-center gap-1">
                    <HiOutlineMail className="text-[#9873FF] text-lg"></HiOutlineMail>
                    <h1>
                    <span className="text-sm font-bold">Email : </span>
                    <span className="text-xs font-medium text-[#757575]">{contact_information.email}</span>
                    </h1>
                </div>
                <div className="flex items-center gap-1">
                    <SlLocationPin className="text-[#9873FF]"></SlLocationPin>
                    <h1>
                    <span className="text-sm font-bold">Address : </span>
                    <span className="text-xs font-medium text-[#757575]">{contact_information.address}</span>
                    </h1>
                </div>
                </div>
                </div>
                
                <NavLink>
                <button className="btn  w-full mt-5 normal-case bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 ">Apply Now</button>
                </NavLink>
            </div>
        </div>
        </div>
        
    );
};

export default ViewDetails;
import { useState } from "react";
import Cards from "./Cards";
import PropTypes from "prop-types"


const FeaturedJobs = ({jobData}) => {
    const [dataLength, setDataLength] = useState(4)

    return (
        <div  className="container mx-auto text-center my-20">
        <div>
            <h1 className="text-4xl font-extrabold">Featured Jobs</h1>
            <p className="text-xs font-medium text-[#757575] my-3 mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className=" container mx-auto text-center grid grid-cols-2 gap-7">
            {
                jobData.slice(0, dataLength).map((data, index) => <Cards key={index} data={data}></Cards>)
            }
        </div>

        <div className={dataLength === jobData.length && 'hidden'}>
        <button onClick={()=> setDataLength(jobData.length)} className="btn normal-case bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 mt-10">See All Jobs</button>
        </div>

        </div>
    );
};

FeaturedJobs.propTypes = {
    jobData: PropTypes.array.isRequired
}

export default FeaturedJobs;
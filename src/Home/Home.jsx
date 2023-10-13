import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import FeaturedJobs from "./Featured Jobs/FeaturedJobs";
import JobCetagoryList from "./JobCetagoryList/JobCetagoryList";


const Home = () => {
    const jobData = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <JobCetagoryList></JobCetagoryList>
            <FeaturedJobs jobData={jobData}></FeaturedJobs>
            
        </div>
    );
};

export default Home;
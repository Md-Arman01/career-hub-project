

const JobCetagoryList = () => {
    return (
        <div className="container mx-auto text-center my-20">
            <h1 className="text-4xl font-extrabold">Job Category List</h1>
            <p className="text-xs font-medium text-[#757575] my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-7 mt-10">
                <div className="bg-[#f9f8ff] p-5 text-left rounded-md">
                    <img src="https://i.ibb.co/47J6cG9/accounts.png" alt="" />
                    <h1 className="text-base font-semibold mt-5">Account & Finance</h1>
                    <p className="text-[#A3A3A3] text-xs font-medium mt-1">300 Jobs Available</p>
                </div>
                <div className="bg-[#f9f8ff] p-5 text-left rounded-md">
                    <img src="https://i.ibb.co/t2m4pxB/creative.png" alt="" />
                    <h1 className="text-base font-semibold mt-5">Creative Design</h1>
                    <p className="text-[#A3A3A3] text-xs font-medium mt-1">100+ Jobs Available</p>
                </div>
                <div className="bg-[#f9f8ff] p-5 text-left rounded-md">
                    <img src="https://i.ibb.co/KKg17yB/marketing.png" alt="" />
                    <h1 className="text-base font-semibold mt-5">Marketing & Sales</h1>
                    <p className="text-[#A3A3A3] text-xs font-medium mt-1">150 Jobs Availablee</p>
                </div>
                <div className="bg-[#f9f8ff] p-5 text-left rounded-md">
                    <img src="https://i.ibb.co/sWxyNDv/chip.png" alt="" />
                    <h1 className="text-base font-semibold mt-5">Engineering Job</h1>
                    <p className="text-[#A3A3A3] text-xs font-medium mt-1">224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCetagoryList;
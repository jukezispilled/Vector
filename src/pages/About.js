import React from "react";

export default function About() {
    return(
        <div className="h-min px-[18.5%] pt-[18%] md:pt-[10%] bg-cover bg-[#f9f9f9] bg-fixed pb-[10%]">
            <div className="text-4xl font-bold my-7">About</div>
            <div className="xl:bg-slate-100 h-max xl:shadow-xl rounded-xl xl:p-10">
                <div className="md:flex space-y-5 md:space-y-0 md:space-x-20">
                    <div className="w-full md:w-[55%]">
                        <div className="h-[300px] md:h-[450px] w-full rounded-lg bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/wpb.jpg'})`}}>
                        </div>
                        <div className="mt-7 md:mt-10 text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold flex justify-start md:justify-center text-[#194A99]">HEAVY BRIDGE AND HIGHWAY</div>
                    </div>
                    <div className="text-l w-full md:w-[45%] font-semibold">
                        <p className="mb-7">Vector Construction, co-founded by Richard F. Anderson in 1963, is a family owned company specializing in heavy highway construction.</p>
                        <p className="mb-7">Vector’s headquarters and shop are located in Cicero, New York and performs work throughout New York State. Vector focuses on bridge rehabilitation and replacement. Project contracts generally range from 100 thousand to 25 million dollars.</p>
                        <p className="mb-7">With over 100 years of combined experience in office management and field supervision, and a large inventory of equipment and material resources, Vector is able to meet client’s satisfaction through project execution and delivery. </p>
                        <p>Vector is an Equal Opportunity/Affirmative Action employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, national origin, disability, or protected Veteran status.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
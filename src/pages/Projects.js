import React from "react";

export default function Projects() {
    return(
        <div className="h-min px-[18.5%] pt-[22%] md:pt-[8%] bg-cover bg-[#ffffff] bg-fixed pb-[14%]">
            <div className="text-4xl font-bold my-7">Projects</div>
            <div className="xl:bg-[#f6f6f6] h-min rounded-xl xl:shadow-md md:p-10">
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">Onondaga Pedestrian Bridge</div>
                    <div className="py-5 grid space-y-10 md:flex md:space-x-20 md:space-y-0 h-min">
                        <div className="h-[250px] md:w-[50%] md:h-[300px] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/proj1.jpg'})` }}></div>
                        <div className="md:w-[50%]">
                            <div>The Onondaga Pedestrian Bridge is a bridge that spans across Onondaga Creek in Syracuse, New York, USA. The bridge is designed to provide a safe pedestrian and bike path between the Onondaga Creekwalk and the Creekwalk Extension.</div>
                            <div className="pt-2 text-lg font-bold">Location:</div>
                            <div className="pt-2 text-lg font-bold">Services:</div>
                            <div className="pt-2 text-lg font-bold">Owner:</div>
                            <div className="pt-2 text-lg font-bold">Cost:</div>
                        </div>
                    </div>
                </div>
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">Camillus Aqueduct</div>
                    <div className="py-5 grid space-y-10 md:flex md:space-x-20 md:space-y-0 h-min">
                        <div className="h-[250px] md:h-[300px] md:w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/aq1.jpg'})` }}></div>
                        <div className="md:w-[50%]">
                            <div>The Camillus Aqueduct was a crucial part of the Erie Canal system, which was built in the early 19th century to connect the Hudson River with the Great Lakes. The original aqueduct was constructed in 1842 and served as a vital link in the transportation of goods and people across New York State.</div>
                            <div className="pt-2 text-lg font-bold">Location:</div>
                            <div className="pt-2 text-lg font-bold">Services:</div>
                            <div className="pt-2 text-lg font-bold">Owner:</div>
                            <div className="pt-2 text-lg font-bold">Cost:</div>
                        </div>
                    </div>
                </div>
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">Whitney Point</div>
                    <div className="py-5 md:flex grid space-y-10 md:space-x-20 md:space-y-0 h-min">
                        <div className="h-[250px] md:h-[300px] md:w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/wp.jpg'})` }}></div>
                        <div className="md:w-[50%]">
                            <div>A temporary bridge installation and bridge replacement of Route 26 / 79 over Tioughnioga River.</div>
                            <div className="pt-2 text-lg font-bold">Location:</div>
                            <div className="pt-2 text-lg font-bold">Services:</div>
                            <div className="pt-2 text-lg font-bold">Owner:</div>
                            <div className="pt-2 text-lg font-bold">Cost:</div>
                        </div>
                    </div>
                </div>
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">John Glenn Boulevard</div>
                    <div className="py-5 grid space-y-10 md:flex md:space-x-20 md:space-y-0 h-min">
                        <div className="h-[250px] md:h-[300px] md:w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/jgb.jpg'})` }}></div>
                        <div className="md:w-[50%]">
                            <div>A bridge rehabilitation of Eastbound and Westbound structures over Onondaga lake outlet.</div>
                            <div className="pt-2 text-lg font-bold">Location:</div>
                            <div className="pt-2 text-lg font-bold">Services:</div>
                            <div className="pt-2 text-lg font-bold">Owner:</div>
                            <div className="pt-2 text-lg font-bold">Cost:</div>
                        </div>
                    </div>
                </div>
                <div className="mb-7">   
                    <div className="text-3xl font-semibold">Hoxie Gorge</div>
                    <div className="py-5 grid space-y-10 md:flex md:space-x-20 md:space-y-0 h-min">
                        <div className="h-[250px] md:h-[300px] md:w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hoxie.jpg'})` }}></div>
                        <div className="md:w-[50%]">
                            <div>A replacement of I81 Bridges over Hoxie Gorge.</div>
                            <div className="pt-2 text-lg font-bold">Location:</div>
                            <div className="pt-2 text-lg font-bold">Services:</div>
                            <div className="pt-2 text-lg font-bold">Owner:</div>
                            <div className="pt-2 text-lg font-bold">Cost:</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
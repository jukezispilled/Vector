import React from "react";

export default function Projects() {
    return(
        <div className="h-min px-[18.5%] pt-[18%] md:pt-[10%] bg-cover bg-[#fafafa] bg-fixed pb-[14%]">
            <div className="text-4xl font-bold my-7">Projects</div>
            <div className="xl:bg-slate-100 h-min rounded-xl xl:shadow-xl md:p-10">
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">Onondaga Pedestrian Bridge</div>
                    <div className="py-5 flex space-x-20 h-[300px]">
                        <div className="w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/proj1.jpg'})` }}></div>
                        <div className="w-[50%]">The Onondaga Pedestrian Bridge is a bridge that spans across Onondaga Creek in Syracuse, New York, USA. The bridge is designed to provide a safe pedestrian and bike path between the Onondaga Creekwalk and the Creekwalk Extension.</div>
                    </div>
                </div>
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">Camillus Aqueduct</div>
                    <div className="py-5 flex justify-start space-x-20 h-[300px]">
                        <div className="w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/aq1.jpg'})` }}></div>
                        <div className="w-[50%]">The Camillus Aqueduct was a crucial part of the Erie Canal system, which was built in the early 19th century to connect the Hudson River with the Great Lakes. The original aqueduct was constructed in 1842 and served as a vital link in the transportation of goods and people across New York State.</div>
                    </div>
                </div>
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">Whitney Point</div>
                    <div className="py-5 flex justify-start space-x-20 h-[300px]">
                        <div className="w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/wp.jpg'})` }}></div>
                        <div className="w-[50%]">A temporary bridge installation and bridge replacement of Route 26 / 79 over Tioughnioga River.</div>
                    </div>
                </div>
                <div className="mb-7 border-solid border-b-2 border-slate-300">   
                    <div className="text-3xl font-semibold">John Glenn Boulevard</div>
                    <div className="py-5 flex justify-start space-x-20 h-[300px]">
                        <div className="w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/jgb.jpg'})` }}></div>
                        <div className="w-[50%]">A bridge rehabilitation of Eastbound and Westbound structures over Onondaga lake outlet.</div>
                    </div>
                </div>
                <div className="mb-7">   
                    <div className="text-3xl font-semibold">Hoxie Gorge</div>
                    <div className="py-5 flex justify-start space-x-20 h-[300px]">
                        <div className="w-[50%] bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hoxie.jpg'})` }}></div>
                        <div className="w-[50%]">A replacement of I81 Bridges over Hoxie Gorge.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
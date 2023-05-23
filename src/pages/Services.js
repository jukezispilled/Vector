import React from "react";

export default function Services() {
    return(
        <div className="h-min pb-[25%] lg:pb-[10%] px-[18.5%] pt-[18%] md:pt-[10%] bg-cover bg-[#f9f9f9] bg-fixed">
            <div className="text-4xl font-bold my-7">Services</div>
            <div className="md:flex justify-start"> 
                <div className="w-full grid md:grid-cols-3 gap-y-24 gap-x-6 md:pb-10 lg:pb-32">
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bdemo.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Bridge Demo</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/cretez.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Concrete Construction and Repair</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/culv.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Culverts</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-contain transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ev.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Excavation and Backfill</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-contain object-top transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/spd.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Specialized Deck Overlays</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/se.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Steel Erection</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/sr.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Steel Repair</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/sd.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 full w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Storm Drains</div>
                    </div>
                    <div className="relative h-56 w-full md:h-44 md:w-full lg:h-56 lg:w-full 2xl:h-[270px] 2xl:w-full rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[105%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/sl.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl text-white font-semibold p-5 bg-[#638ed4]">Structural Lifting</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
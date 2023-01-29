import React from "react";

export default function Services() {
    return(
        <div className="h-min pb-[20%] lg:pb-[10%] pl-[18.5%] pt-[18%] md:pt-[10%] bg-cover bg-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/arr1.png'})` }}>
            <div className="text-4xl font-bold my-7">Services</div>
            <div className="w-[84%] md:flex justify-start"> 
                <div className="grid md:grid-cols-3 gap-24 md:py-10 lg:pb-32 md:place-items-center">
                    <div className="relative h-56 w-[100%] md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bdemo.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Bridge Demo</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/cretez.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold md:p-5 lg:p-3 p-3 bg-slate-300">Concrete Construction and Repair</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/culv.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Culverts</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-contain transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ev.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Excavation and Backfill</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-contain object-top transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/spd.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Specialized Deck Overlays</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/se.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Steel Erection</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/sr.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Steel Repair</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/sd.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 full w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Storm Drains</div>
                    </div>
                    <div className="relative h-56 w-full md:h-64 md:w-[450px] lg:h-56 lg:w-64 rounded-lg shadow-xl bg-cover transition-transform duration-200 ease-in hover:scale-[110%] transform" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/sl.jpg'})` }}>
                        <div className="absolute bottom-0 -mb-16 w-full h-auto rounded-b-md text-2xl font-semibold p-5 bg-slate-300">Structural Lifting</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
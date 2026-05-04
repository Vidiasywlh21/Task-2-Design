export default function Task2() {
    return (

        <div className="bg-slate-50 min-h-screen p-10 grid font-sans">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 text-blue-950">

        <div className="bg-blue-50 h-72 p-8 flex flex-col justify-between rounded-[32px] col-span-3 relative shadow-sm">
            <div className="flex gap-3 items-center">
                <img src="/palette.svg" alt="Icon" className="w-5 h-5" />
                <p className="font-semibold text-blue-500">Design</p>
            </div>
            <div className="flex justify-between items-end"></div>
            <div>
                <h1 className="text-3xl font-bold text-blue-900 leading-tight">Adobe Photoshop</h1>
                <p className="text-blue-400 mt-2">in 3 days</p>
            </div>
            <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">9+</div>

            </div>
        </div>


        <div className="bg-green-50 h-72 p-8 flex flex-col justify-between rounded-[32px] col-span-3 shadow-sm border border-white/50">
        <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
            <img src="/source-code.svg" alt="Icon" className="w-5 h-5"/>
            <p className="font-semibold text-green-600">AI</p>
            </div>
            <img src="/star.svg" alt="Icon" className="w-5 h-5"/>
        
        </div>
        <div className="flex-justify-between items-end">
        <div>
            <h1 className="text-2xl font-bold text-green-900">DALL·E 2, Midjourney, Stable Diffusion</h1>
            <p className="text-green-600 mt-2">in 5 days</p>
        </div>
        <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-600">3+</div>
        </div>
        </div>
        </div>

    
            <div className="bg-purple-100 h-64 p-8 flex flex-col justify-between rounded-[32px] col-span-2 shadow-sm border border-white/50">
                <div className="flex gap-3 items-center">
                    <img src={"/palette.svg"} alt="Icon" className="w-5 h-5" />
                    <p className="font-semibold text-purple-600">Design</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-purple-900">Figma</h1>
                    <p className="text-purple-600 mt-2 text-sm">8 hours ago</p>
                </div>
            </div> 

        <div className="bg-orange-50 h-64 p-8 flex flex-col justify-between rounded-[32px] col-span-2 shadow-sm border border-white/50">
            <div className="flex gap-3 items-center">
                <img src="/code.svg" alt="Icon" className="w-5 h-5"/>
                <p className="font-semibold text-orange-600">Coding</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-orange-950">Python</h1>
                <p className="text-orange-600 mt-2 text-sm">2 days ago</p>
            </div>
        </div>

        <div className="bg-pink-50 h-64 p-8 flex flex-col justify-between rounded-[32px] col-span-2 shadow-sm border border-white/50">
            <div className="flex gap-3 items-center">
                <img src="palette.svg" alt="Icon" className="w-5 h-5"/>
                <p className="font-semibold text-pink-600 text-sm">Design</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-pink-900">Sketch</h1>
                <p className="text-pink-600 mt-2 text-sm">4 days ago</p>
            </div>
        </div>

        </div>
       </div>
    );
}

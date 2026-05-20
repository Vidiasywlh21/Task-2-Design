import Badge from "./_components/badge";
import Button from "./_components/button";

export default function cards() {
    return(
        <div className="flex flex-col bg-gray-200 h-screen gap-6">
            <div className="flex justify-center gap-4">

    {/* web design */}
        {/* Background Putih Paling Luar*/}
        <div className="bg-white rounded-xl h-70 w-65 flex flex-col items-center pt-3">

            {/* Background Biru text web design*/}
            <div className="bg-blue-100 rounded-xl h-55 w-60 p-5 gap-3">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-black font-bold text-2xl">Web Design</h1>
                        <p className="text-black text-sm">Create engaging user-friendly websites.</p> 
            </div>

            <div className="flex flex-wrap gap-2">
                <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-22 flex justify-center items-center">Landing Page</p>
                <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-15 flex justify-center items-center">Website</p>
                <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-20 flex flex-col justify-center items-center">One Page</p>
            </div>
            </div>
            </div>
            {/* Area Explore */}
            <div className="w-full px-5 pt-3 flex justify-between">
                <p className="font-bold text-black">Explore</p>
                <Button/>
                </div>
                </div>
                

    {/* Grapic Design */}
        <div className="bg-white rounded-xl h-70 w-65 flex flex-col items-center pt-3 pb-4">
            <div className="bg-orange-100 rounded-xl h-55 w-60 p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-2xl">Graphic Design</h1>
                    <p className="text-black text-sm">Creates impactful visuals and branding.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                <Badge name="Packaging"/>
                <Badge name="Branding Identity"/>
                <Badge name="Illustration"/>
                </div>
            </div>

        <div className="w-full px-5 pt-4 flex justify-between">
            <p className="font-bold text-black">Explore</p>
            <Button/>
        </div>
        </div>

    {/* Developers */}
        <div className="bg-white rounded-xl h-70 w-65 flex flex-col items-center pt-3 pb-4">
            <div className="bg-purple-100 rounded-xl h-55 w-60 p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-2xl">Developers</h1>
                    <p className="text-black text-sm">Builds functional and scalable solutions.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <p className="bg-purple-300 rounded-2xl text-[12px] text-black h-6 w-24 flex justify-center items-center">Web Applications</p>
                    <p className="bg-purple-300 rounded-2xl text-[12px] text-black h-6 w-20 flex justify-center items-center">Mobile Apps</p>
                    <p className="bg-purple-300 rounded-2xl text-[12px] text-black h-6 w-17 flex flex-col justify-center items-center">Database</p>
                    <p className="bg-purple-300 rounded-2xl text-[12px] text-black h-6 w-15 flex justify-center items-center">Add-ons</p>
                </div>
            </div>

        <div className="w-full px-5 pt-4 flex justify-between">
            <p className="font-bold text-black">Explore</p>
            <Button/>
        </div>
        </div>

    {/* Copywriting */}
    <div className="bg-white rounded-xl h-70 w-65 flex flex-col items-center pt-3 pb-4">
            <div className="bg-blue-100 rounded-xl h-55 w-60 p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-2xl">Copywriting</h1>
                    <p className="text-black text-sm">Delivers persuasive and creative content.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-20 flex justify-center items-center">Blog Posts</p>
                    <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-22 flex justify-center items-center">Video Scripts</p>
                    <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-22 flex flex-col justify-center items-center">Sales Pages</p>
                    <p className="bg-blue-300 rounded-2xl text-[12px] text-black h-6 w-15 flex justify-center items-center">Slogans</p>
                </div>
            </div>

        <div className="w-full px-5 pt-4 flex justify-between">
            <p className="font-bold text-black">Explore</p>
            <Button/>
        </div>
        </div>

            </div>
        </div>

    )
}
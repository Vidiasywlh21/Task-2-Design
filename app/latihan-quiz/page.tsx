export default function latihan_quiz() {
    return (
        <div>

            <div className="flex flex-col bg-white h-screen gap-6">

                <div className=" flex justify-center gap-4 p-8 text-blue-950">
{/* Fitur adobe */}
                             <div className="bg-blue-100 h-72 w-145 p-8 flex flex-col justify-between rounded-4xl"> 
                                <div className="flex gap-2">
                                <img src={'palette.svg'} alt= 'Icon Palette'/>
                                <p>Design</p>
                                </div>
                
                                <div>
                                <h1 className= "text-4xl font-bold">Adobe Photoshop</h1>
                                    <div className="flex justify-between"> <p> in 3 days</p> 
                                        <div className="flex justify-between -space-x-2">
                                        <img className = " h-7 w-7 border-2 border-white rounded-full"src="https://randomuser.me/api/portraits/women/40.jpg" alt="orang" />
                                        <img className = " h-7 w-7 border-2 border-white rounded-full"src="https://randomuser.me/api/portraits/men/35.jpg" alt="orang" />
                                        <img className = " h-7 w-7 border-2 border-white rounded-full"src="https://randomuser.me/api/portraits/men/39.jpg" alt="orang" />
                                        <div className="bg-blue-200 border-2 border-white rounded-full h-7 w-7 flex justify-center"><p>9+</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

{/* Fitur DALLE */}
                            <div className="bg-green-100 h-72 w-145 p-8 flex flex-col justify-between rounded-4xl"> 
                                
                            <div className="flex justify-between">
                                
                                
                                <div className="flex gap-2">
                                <img src={'source-code.svg'} alt= 'Icon Terminal'/>
                                <p className="font-bold"> AI </p>
                                </div>

                                <div> <img src="star.svg" alt="ikon star" /></div>
                                </div>
                             <div> 
                                <h1 className= "text-4xl font-bold"> DALLL‧E 2, Midjourney, 
                                    Stabel Diffusion</h1>
                                <div className="flex justify-between"> <p> in 5 days</p> 
                                        <div className="flex justify-between -space-x-2">
                                        <img className = " h-7 w-7 border-2 border-white rounded-full"src="https://randomuser.me/api/portraits/women/42.jpg" alt="orang" />
                                        <img className = " h-7 w-7 border-2 border-white rounded-full"src="https://randomuser.me/api/portraits/men/22.jpg" alt="orang" />
                                        <img className = " h-7 w-7 border-2 border-white rounded-full"src="https://randomuser.me/api/portraits/men/31.jpg" alt="orang" />
                                        <div className="bg-green-200 border-2 border-white rounded-full h-7 w-7 flex justify-center"><p>3+</p></div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                </div>
                   
                        <div className='bg-white h-screen flex justify-center gap-4 p-8 text-blue-950'> 

{/* Fitur figma */}                             
                            <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl"> 
                                <div className="flex gap-2">
                                <img src={'palette.svg'} alt= 'Icon Palette'/>
                                <p>Design</p>
                                </div>
                
                                <div>
                                <h1 className= "text-4xl font-bold"> Figma</h1>
                                <p> 8 hours ago</p>
                                </div>
                            </div> 

{/* Fitur Python */}
                            <div className="bg-orange-200 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl"> 
                                <div className="flex gap-2">
                                <img src={'code.svg'} alt= 'code'/>
                                <p>Codding</p>
                                </div>
                
                                <div>
                                <h1 className= "text-4xl font-bold">Python</h1>
                                <p> 2 days ago</p>
                                </div>
                            </div>

{/* Fitur Sketch */}
                             <div className="bg-red-200 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl"> 
                                <div className="flex gap-2">
                                <img src={'palette.svg'} alt= 'palette'/>
                                <p>Design</p>
                                </div>
                
                                <div>
                                <h1 className= "text-4xl font-bold">Sketch</h1>
                                <p> 4 days ago</p>
                                </div>
                            </div>


                        </div>
            </div>
</div>
    );   
}
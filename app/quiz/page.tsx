export default function task3() {
  return(
    <div className="bg-white h-screen flex flex-col text-blue-950 gap-6 p-8">
      <div className="flex justify-center flex flex-col gap-6 p-8">

        {/* adobe */}
        <div className="flex gap-4 justify-center">
          <div className="">

          </div>
          <div className="bg-blue-100 h-72 w-145 p-8 flex flex-col justify-between rounded-4xl relative shadow-sm">
            <div className="flex gap-4 m-3">
              <img src={"palette.svg"} alt="Icon Palette"/>
              <p>Design</p>
            </div>

          <div>
            <h1 className="text-4xl font-bold justify-between">Adobe Photoshop</h1>
            <div className="flex justify-between font-bold "> <p>in 3 days</p>
            <div className="flex justify-between -space-x-2">
              <img className="h-8 w-8 border-2 border-white rounded-full" src="https://i.pravatar.cc/200?u=1" alt="user 1"></img>
              <img className="h-8 w-8 border-2 border-white rounded-full" src="https://i.pravatar.cc/200?u=2" alt="user 2"></img>
              <img className="h-8 w-8 border-2 border-white rounded-full" src="https://i.pravatar.cc/200?u=3" alt="user 3"></img>
              <div className="h-8 w-8 border-2 border-white rounded-full flex justify-center text-bold">9+</div>

            </div>


            </div>
          </div>

          </div>

        </div>

{/* dell-e */}

      <div className="flex gap-4 justify-center">
        <div className="bg-green-100 h-72 w-145 p-8 flex flex-col justify-between rounded-4xl relative shadow-sm">
          <div className="flex gap-4 m-3">
            <img src={'/source-code.svg'} alt="icon"/>
            <p>AI</p>
            </div>

            <div>
              <h1 className="text-4xl font-bold">DALLL‧E 2, Midjourney,
                Stable Diffusion</h1>
                <div className="flex justify-between"><p>in 5 days</p>
                <div className="flex justify-between -space-x-2">
                  <img className="h-8 w-8 border-2 border-white rounded-full" src="https://i.pravatar.cc/200?u=4" alt="user 1"/>
                  <img className="h-8 w-8 border-2 border-white rounded-full" src="https://i.pravatar.cc/200?u=5" alt="user 2"/>
                  <img className="h-8 w-8 border-2 border-white rounded-full" src="https://i.pravatar.cc/200?u=6" alt="user 3"/>
                  <div className="h-8 w-8 border-2 border-white rounded-full flex justify-center text-bold">3+</div>


                </div>

                </div>

            </div>

          </div>
        </div>

{/* figma */}

        <div className="flex gap-4 justify-center">
          <div className="bg-purple-100 h-72 w-145 p-8 justify-between rounded-4xl relative shadow-sm">

          </div>

        </div>

      </div>

      </div>

  )
}
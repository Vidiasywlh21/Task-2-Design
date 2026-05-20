import Platform from "./_components/platform";

export default function SideBar(){
    return(

        <div className="flex flex-col bg-gray-200 h-screen justify-center items-center">
            <div className="bg-black rounded-xl h-55 w-65 relative overflow-hidden p-4">

                <Platform
                text="Acme Inc"
                field="Enterprise"/>
            </div>
            
        </div>
    );
}
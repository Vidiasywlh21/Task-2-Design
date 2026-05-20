import Image from "next/image";

export default function CarSales({brand, price, sold, store, imageSrc}: {brand: string, price: string, sold: string, store: string, imageSrc: string}){
    return(

    <div className="bg-white rounded-xl h-90 w-90 flex flex-col items-center overflow-hidden shadow-md pt-2">
        <div className="bg-gray-100 rounded-xl h-55 w-85 relative overflow-hidden p-4">
            <Image 
            src={imageSrc}
            alt ="name"
            fill className="object-contain"/>
        </div>
        <div className="w-full p-3 flex flex-col gap-1">
            <h1 className="text-black">{brand}</h1>
            <p className="text-black font-bold text-base pt-0">{price}</p>
            <p className="text-gray-500 font-sans text-xs pt-0">{sold}</p>
            <p className="text-gray-500 font-sans text-xs pt-0">{store}</p>


        </div>
        </div>

    );

}
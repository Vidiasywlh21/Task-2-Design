"use client";

export default function Badge({name, price}:{name: string, price: string}){
    return(
       <button onClick={() => alert("Tombol diklik!")} className="bg-white border border-gray-200 rounded-none h-15 w-35 flex flex-col items-center pt-1 cursor-pointer transition-all">
        <p className="text-gray-400 text-sm">{name}</p>
        <p className="text-black text-lg font-bold">{price}</p>
    
        </button>
    );
}
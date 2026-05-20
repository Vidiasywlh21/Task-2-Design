export default function Platform({text, field }: {text: string, field: string}){
    return(

        <div className="w-full p-3 flex flex-col flex flex-row gap-3">
            <img src="/samsung_checkout.png" alt="Icon" className="w-10 h-10"/>
            <h1 className="text-gray-500">{text}</h1>

        <div className="w-full p-3 flex flex-col gap-1">
            <p className="text-gray-500 text-base pt-0">{field}</p>

        </div>
        </div>
    );
}
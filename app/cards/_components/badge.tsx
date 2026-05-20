export default function Badge({name}:{name: string}){
    return(
        <div className="flex flex-wrap gap-2">
            <p className="bg-orange-300 rounded-2xl text-[12px] text-black flex justify-center items-center">{name}</p>
        </div>
    );
}
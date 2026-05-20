import CarSales from "./_components/CarSales";

export default function PenjualanMobil(){
    return(

        <div className="flex flex-col bg-gray-200 h-screen justify-center items-center ">
            <div className="flex justify-center gap-0">
            
            <CarSales
                brand="TERIOS 1.5 R AT (75.000.000)"
                price="Rp. 75.000.000"
                sold=" 1 terjual"
                store="Tunas Daihatsu Toko"
                imageSrc="/mobil-removebg-preview.png"/>

            </div>

        </div>
    );
}
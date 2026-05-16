import Badge from "./_CardScheduleDestination/badge";

export default function ScheduleDestination() {
    return(
        <div className="flex flex-col bg-gray-200 h-screen items-center justify-center">
            <div className="flex justify-center gap-0">

    {/* Design Schedule */}
        <Badge name="Jum, 15 Mei 2026" price="IDR 3.104.327"/>
        <Badge name="Sab, 16 Mei 2026" price="IDR 3.699.746"/>
        <Badge name="Min, 17 Mei 2026" price="IDR 3.801.503"/>
        <Badge name="Sen, 18 Mei 2026" price="IDR 3.442.682"/>
        <Badge name="Sel, 19 Mei 2026" price="IDR 3.664.571"/>
        <Badge name="Rab, 20 Mei 2026" price="IDR 3.724.541"/>
        <Badge name="Kam, 21 Mei 2026" price="IDR 3.801.503"/>
        <Badge name="Jum, 22 Mei 2026" price="IDR 3.510.124"/>
        <Badge name="Sab, 23 Mei 2026" price="IDR 4.015.296"/>

            </div>
        </div>

    )
}
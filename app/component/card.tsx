export default function Card({
    label,
    value
}: {
    label: string,
    value: string | number | null
}) {
    return(
        <>
            <div className="grid grid-cols-4 gap-5 w-full">
                <h2 className="font-bold w-12">{label}</h2>
                <h2 className="text-gray-600 font-semibold">{value}</h2>
            </div>
        </>
    )
}
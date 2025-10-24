export default function Analisis({params}: {params: {id: string, no: string}}) {
    return (
        <div>
            <h1>Analisis</h1> 
            <h1>Id: {params.id}</h1> 
            <h1>No: {params.no}</h1> 
        </div>
    )
}
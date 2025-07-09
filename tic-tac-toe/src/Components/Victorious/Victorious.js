import './Victorious.css'

export default function Victorious({victoriousComponent}){
    return (
        <>
            <span className='text-lg font-bold mt-6 block'>Vencedor: </span>
            {
                victoriousComponent !== null && victoriousComponent
            }
        </>
    )
}


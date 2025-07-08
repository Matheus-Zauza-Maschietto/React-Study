import './Victorious.css'

export default function Victorious({victoriousComponent}){
    return (
        <>
            <span>Vencedor: </span>
            {
                victoriousComponent !== null ?
                (<victoriousComponent/>) :
                null
            }
        </>
    )
}


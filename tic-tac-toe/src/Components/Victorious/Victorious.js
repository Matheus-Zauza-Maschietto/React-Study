import './Victorious.css'

export default function Victorious({victoriousComponent}){
    return (
        <>
            <span style={{
                fontSize: '20px'
            }}>Vencedor: </span>
            {
                victoriousComponent !== null ?
                (victoriousComponent) :
                null
            }
        </>
    )
}


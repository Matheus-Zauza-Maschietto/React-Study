import './O.css';

export default function O({diameter}){
    return (
        <div className='circle' style={{
            height: `${diameter-diameter*0.25}px`,
            width: `${diameter-diameter*0.25}px`
        }}/>
    )
}
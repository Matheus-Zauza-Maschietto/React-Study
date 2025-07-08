import './X.css';

export default function X({height}) {
    return (
        <div className='x'>
            <span className='line1' style={{
                height: `${height}px`
            }}/>
            <span className='line2' style={{
                height: `${height}px`
            }}/>
        </div>
    )
}

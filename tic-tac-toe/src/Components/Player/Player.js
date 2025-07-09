

export default function Player({name, points}){
    return (
        <div className="flex flex-col items-center justify-items-center">
            <span className="font-bold text-black text-lg">Name: {name}</span>
            <span className="font-bold text-black text-lg">Points: {points}</span>
        </div>
    );
}

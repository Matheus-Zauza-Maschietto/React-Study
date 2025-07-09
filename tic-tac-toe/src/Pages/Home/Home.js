import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    function redirectToGame(formData){
        const player1 = formData.get("player1");
        const player2 = formData.get("player2");
        const boardLength = formData.get("boardLength")
        navigate(`/Game?player1=${player1}&player2=${player2}&board-length=${boardLength}`)
    }

    return (
        <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Tic-Tac-Toe</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" action={redirectToGame}>
                <div className='mb-4'>
                    <label id='player1-label' className="block text-gray-700 text-sm font-bold mb-2">
                        Player 1 Name
                        <input 
                            name='player1' 
                            type='text' 
                            id='player1-input' 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </label>
                </div>
                <div className='mb-4'>
                    <label id='player2-label' className="block text-gray-700 text-sm font-bold mb-2">
                        Player 2 Name
                        <input 
                            name='player2'
                            type='text' 
                            id='player2-input' 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </label>
                </div>
                <div className='mb-6'>
                    <label id='player2-label' className="block text-gray-700 text-sm font-bold mb-2">
                        Board Length
                        <input 
                            name='boardLength'
                            type='number' 
                            min='3'
                            defaultValue='3'
                            id='board-length' 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </label>
                </div>
                <div className="flex items-center justify-center">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 min-w-full"
                        type="submit"
                    >
                        Jogar
                    </button>
                </div>
            </form>
        </div>
    )
}
import {FaArrowLeft} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <div className="flex justify-between">
            <div className='flex gap-6 items-center'>
                <button onClick={()=>{navigate('/onboard')}}>
                    <FaArrowLeft />
                </button>
                <img src='logo.png'/>
                <div>
                    <h2 className='text-blue font-bold text-[1.25rem]'>Chatty</h2>
                    <p className='text-green'><span></span> Online</p>
                </div>
            </div>
            <button className='border-blue border-[2px] px-4 rounded-full font-semibold text-[1.1rem] hover:bg-blue hover:text-white active:bg-blue active:text-white'>Start over</button>
        </div>
    )
}

import {AiOutlineAlignLeft, AiOutlineEdit} from 'react-icons/ai'
import {BsTranslate} from 'react-icons/bs'
import { useAuth } from './useAuth'

export default function PreloadConvo() {

    const {dispatch} = useAuth()
    const data = [
        {
            name: 'Explain',
            items: [
                'Explain Quantum physics',
                'What are wormholes and explain like i am 5'
            ]
        },
        {
            name: 'Write & Edit',
            items: [
                'Write a tweet about global warming',
                'Write a poem about flower and love',
                'Write a rap song lyrics about world peace'
            ]
        },
        {
            name: 'Translate',
            items: [
                'How do you say “how are you” in korean?',
                'Translate "Amor vincit omnia" to English'
            ]
        }
    ]

    function setPreloadText(text: string){
        dispatch({
            type: 'setUserInput',
            payload: {
                userInputPayload: text
            }
        })
    }

    return (
        <div className="flex flex-col justify-between h-full items-center md:grid md:grid-cols-3 overflow-y-scroll no-scrollbar pb-7">
            {data.map((item, index)=>{
              
                return (
                    <div key={index} className='my-5 flex flex-col items-center '>
                       <i className='text-3xl'> {item.name==='Explain' ?  <AiOutlineAlignLeft /> : item.name === 'Translate' ?  <BsTranslate /> :  <AiOutlineEdit />}</i>
                       <h3 className='font-bold text-sm mb-2'>{item.name}</h3>
                       <div>
                            {item.items.map((item, index)=>{
                                return <p key={index} onClick={()=>setPreloadText(item)} className='w-full cursor-pointer p-3 rounded-full text-center bg-[#F4F4F4] mb-2'>{item}</p>
                            })}
                       </div>
                    </div>
                )
            })}
        </div>
    )
}

import { BiSend } from 'react-icons/bi'
import { fetchReply } from '../openai'
import { useAuth } from './useAuth'

export default function InputForm() {

    const {userInput, dispatch, conversation} = useAuth()

    async function handleRequest(e: React.FormEvent){
        e.preventDefault()
        conversation.push({
            role: 'user',
            content: userInput
        })

        dispatch({
            type: 'setUserInput',
            payload: {
                userInputPayload: ''
            }
        })

        await fetchReply(conversation).then(res=>{
            if(res){
                conversation.push(res)
            }else console.log('Error')
        })
    }
    
    return (
        <form onSubmit={handleRequest} className=' bg-white box-shadow p-3 flex items-center w-full max-w-[600px] rounded-full self-center'>
            <input 
                type="text"
                className='w-[90%] outline-none text-lg text-blue'
                value={userInput}
                onChange={(e)=>{
                    dispatch({
                        type: 'setUserInput',
                        payload: {
                            userInputPayload: e.target.value
                        }
                    })
                }}
            />
            <button className='text-3xl text-blue'><BiSend /></button>
        </form>
    )
}

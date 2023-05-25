import { BiSend } from 'react-icons/bi'
import { fetchReply } from '../openai'
import { useAuth } from './useAuth'

export default function InputForm() {

    const {userInput, dispatch, conversation} = useAuth()

    async function handleRequest(e: React.FormEvent){
        e.preventDefault()
        
        if(userInput===''){return}
        dispatch({
            type: 'startConvo',
            payload: {
                convoStartedPayload: true
            }
        })
        conversation.push({
            role: 'user',
            content: userInput
        })
        //Adding this to trigger state change for user input
        dispatch({
            type: 'changeState',
            payload: {
                stateChangedPayload: 'Added Assistant message'
            }
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
                //Adding this to trigger state update for Assistant reply
                dispatch({
                    type: 'changeState',
                    payload: {
                        stateChangedPayload: 'Added Assistant message'
                    }
                })
            }else console.log('Error')
        })
    }
    
    return (
        <form onSubmit={handleRequest} className=' bg-white box-shadow p-3 flex items-center w-full max-w-[600px] rounded-full self-center sticky bottom-2'>
            <input 
                type="text"
                className='w-[90%] outline-none text-[1rem] text-blue'
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

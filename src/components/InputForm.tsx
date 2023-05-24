import { BiSend } from 'react-icons/bi'
import { conversationType } from '../type'
import {useState} from 'react'
import { fetchReply } from '../openai'

export default function InputForm() {

    const [userText, setUserText] = useState('')

    const conversation: conversationType[] = [{
        role: 'system',
        content: 'You are a helpful assitant ready to assist with anything. You are also quirky with yout responses'
    }]

    async function handleRequest(e: React.FormEvent){
        e.preventDefault()
        conversation.push({
            role: 'user',
            content: userText
        })
        setUserText('')
        await fetchReply(conversation).then(res=>{
            if(res){
                conversation.push(res)
            }else console.log('Error')
        })
        console.log(conversation)
    }

    return (
        <form onSubmit={handleRequest} className=' bg-white box-shadow p-3 flex items-center w-full max-w-[600px] rounded-full self-center'>
            <input 
                type="text"
                className='w-[90%] outline-none p-2 text-lg text-blue'
                value={userText}
                onChange={(e)=>{
                    setUserText(e.target.value)
                }}
            />
            <button className='text-3xl text-blue'><BiSend /></button>
        </form>
    )
}

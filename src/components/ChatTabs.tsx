import { useAuth } from './useAuth'
import {useRef, useEffect} from 'react'
import { CreateAssistantTab, CreateUserTab } from '../functions';


export default function ChatTabs() {

    const { conversation, typingComplete } = useAuth()
    const chatsTabRef = useRef<null | HTMLDivElement>(null)

    const convos = JSON.stringify(conversation)
    useEffect(()=>{
        const chatsContainer = chatsTabRef?.current
        console.log(chatsContainer)
        if(chatsContainer){
            chatsContainer.scrollTop= chatsContainer.scrollHeight
        }
    },[convos, typingComplete])

    return (
        <div ref={chatsTabRef} className="h-[75vh] max-w-[600px] w-full chatTabs overflow-y-scroll no-scrollbar">
            {conversation.map((convo, index)=>{
                if(convo.role === 'user'){
                    return CreateUserTab(convo.content)
                } else if (convo.role === 'assistant'){
                    return <CreateAssistantTab text={convo.content} key={index} index={index}/>
                }
            })}
        </div>
    )
}

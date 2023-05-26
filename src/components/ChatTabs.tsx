import { useAuth } from './useAuth'
import {useRef, useEffect} from 'react'
import { CreateAssistantTab, CreateUserTab } from './Tabs';


export default function ChatTabs() {

    const { conversation, typingComplete, stateChanged } = useAuth()
    const chatsTabRef = useRef<null | HTMLDivElement>(null)

    const convos = JSON.stringify(conversation)

    useEffect(()=>{
        const chatsContainer = chatsTabRef?.current
        if(chatsContainer){
            chatsContainer.scrollTop= chatsContainer.scrollHeight
        }
    },[convos, typingComplete, stateChanged])

    return (
        <div ref={chatsTabRef} className="h-[75vh] max-w-[600px] w-full chatTabs flex flex-col self-center overflow-y-scroll no-scrollbar">
            {conversation.map((convo, index)=>{
                if(convo.role === 'user'){
                    return <CreateUserTab text={convo.content} key={index}/>
                } else if (convo.role === 'assistant'){
                    return <CreateAssistantTab text={convo.content} key={index} index={index}/>
                }
            })}
        </div>
    )
}

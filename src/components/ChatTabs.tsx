import { useAuth } from './useAuth'
import {useEffect} from 'react'
import { createAssistantTab, createUserTab } from '../functions';


export default function ChatTabs() {

    const { conversation } = useAuth()
    
    // useEffect(()=>{

    // },[conversation])

    return (
        <div className="h-full chatTabs overflow-y-scroll no-scrollbar">
            {conversation.map(convo=>{
                if(convo.role === 'user'){
                    return createUserTab(convo.content)
                } else if (convo.role === 'assistant'){
                    return createAssistantTab(convo.content)
                }
            })}
        </div>
    )
}

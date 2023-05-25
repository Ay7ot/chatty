import { useAuth } from './useAuth'
import { createAssistantTab, createUserTab } from '../functions';


export default function ChatTabs() {

    const { conversation } = useAuth()


    return (
        <div className="h-[75vh] max-w-[600px]  chatTabs overflow-y-scroll no-scrollbar">
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

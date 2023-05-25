import { useAuth } from './useAuth'
import { CreateAssistantTab, CreateUserTab } from '../functions';


export default function ChatTabs() {

    const { conversation } = useAuth()


    return (
        <div className="h-[75vh] max-w-[600px] w-full chatTabs overflow-y-scroll no-scrollbar">
            {conversation.map((convo, index)=>{
                if(convo.role === 'user'){
                    return CreateUserTab(convo.content)
                } else if (convo.role === 'assistant'){
                    return <CreateAssistantTab text={convo.content} key={index}/>
                }
            })}
        </div>
    )
}

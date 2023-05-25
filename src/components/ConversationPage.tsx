import ChatTabs from "./ChatTabs";
import PreloadConvo from "./PreloadConvo";
import { useAuth } from "./useAuth";

export default function ConversationPage() {

    const { convoStarted } = useAuth()
    
    return (
        <div className="self-center">
            {convoStarted ? <ChatTabs /> : <PreloadConvo />}
        </div>
    )
}

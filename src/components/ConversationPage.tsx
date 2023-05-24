import PreloadConvo from "./PreloadConvo";
import { useAuth } from "./useAuth";

export default function ConversationPage() {

    const { convoStarted } = useAuth()
    
    return (
        <div className="h-full">
            <PreloadConvo />
        </div>
    )
}

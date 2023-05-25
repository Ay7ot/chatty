import ConversationPage from "./ConversationPage";
import InputForm from "./InputForm";
import Navbar from "./Navbar";

export default function ChatPage() {

    return (
        <div className="fade-in height px-8 flex flex-col justify-between">
           <Navbar />
           <ConversationPage />
           <InputForm />
        </div>
    )
}

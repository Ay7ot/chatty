import InputForm from "./InputForm";
import Navbar from "./Navbar";

export default function ChatPage() {

    return (
        <div className="fade-in height p-8 relative flex flex-col justify-between">
           <Navbar />

           <InputForm />
        </div>
    )
}

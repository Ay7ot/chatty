import ChatPage from "./ChatPage"
import FirstLoadPage from "./FirstLoadPage"
import OnboardPage from "./OnboardPage"
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
   <div className="font-nunito">
     <Routes>
      <Route path="/" element={<FirstLoadPage />} />
      <Route path="/onboard" element={<OnboardPage />} />
      <Route path="/chat" element={<ChatPage />} />
     </Routes>
   </div>
  )
}

export default App

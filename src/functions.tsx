import {useState, useEffect} from 'react'
import Loader from './components/Loader';
import { useAuth } from './components/useAuth';

export function CreateUserTab(text: string){
    return (
        <p className="bg-blue text-white p-4 rounded-b-3xl rounded-tl-3xl ml-[10%] mb-6">
            {text}
        </p>
    )
}

export function CreateAssistantTab({ text, index }: { text: string; index: number }) {
    const [displayText, setDisplayText] = useState('');
    const { loading, conversation, dispatch } = useAuth();
  
    useEffect(() => {
      let currentIndex = 0;
      let timerId: NodeJS.Timeout;
  
      const typeText = () => {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
  
        if (currentIndex <= text.length) {
          timerId = setTimeout(typeText, 50);
        } else {
          dispatch({
            type: 'typeCompleted',
          });
        }
      };
  
      dispatch({
        type: 'typeNotCompleted',
      });
  
      typeText();
  
      return () => {
        clearTimeout(timerId);
      };
    }, [text, dispatch]);
  
    function setDisplay() {
      if (conversation.length - 1 === index) {
        if(loading){
            return <Loader />
        } else return displayText
      } else {
        return displayText;
      }
    }
  
    return (
      <p className="bg-[#EEEEEE] text-[#656565] p-4 rounded-b-3xl rounded-tr-3xl mr-[10%] mb-6">
        {setDisplay()}
      </p>
    );
  }
  
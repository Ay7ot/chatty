import {useState, useEffect} from 'react'

export function CreateUserTab(text: string){
    return (
        <p className="bg-blue text-white p-4 rounded-b-3xl rounded-tl-3xl ml-[10%] mb-6">
            {text}
        </p>
    )
}

export function CreateAssistantTab({text}: {text:string}) {

    const [displayText, setDisplayText] = useState('')

    // useEffect(()=>{
    //     let currentIndex = 0
    //     const intervalId = setInterval(()=>{
    //         setDisplayText((prevText)=>{ 
    //             return prevText + text[currentIndex]
    //         })
    //         currentIndex++;
            
    //         if(currentIndex === text.length){
    //             clearInterval(intervalId)
    //         }
    //     }, 50)

    //     return ()=> clearInterval(intervalId)
    // })

    
  useEffect(() => {
    let currentIndex = 0;
    let timerId: NodeJS.Timeout;

    const typeText = () => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex <= text.length) {
        timerId = setTimeout(typeText, 50);
      }
    };

    typeText();

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

    return (
      <p className="bg-[#EEEEEE] text-[#656565] p-4 rounded-b-3xl rounded-tr-3xl mr-[10%] mb-6">
        {displayText}
      </p>
    );
  }
  
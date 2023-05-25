export function createUserTab(text: string){
    return (
        <p className="bg-blue text-white p-4 rounded-b-3xl rounded-tl-3xl ml-[10%] mb-6">
            {text}
        </p>
    )
}

export function createAssistantTab(text: string){
    return (
        <p className="bg-[#EEEEEE] text-[#656565] p-4 rounded-b-3xl rounded-tr-3xl mr-[10%] mb-6">
            {text}
        </p>
    )
}
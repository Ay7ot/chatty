export type conversationType = {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export type AppContextType= {
    userInput: string;
    conversation: conversationType[],
    dispatch: React.Dispatch<AppActionType>,
    convoStarted: boolean,
    stateChanged: string,
    loading: boolean,
    typingComplete: boolean
}

export type AppActionType = {
    type: string;
    payload? : {
        userInputPayload?: string;
        conversationPayload?: conversationType[]
        convoStartedPayload?: boolean;
        stateChangedPayload?: string;
    }
}
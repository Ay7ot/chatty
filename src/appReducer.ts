import { AppActionType, AppContextType } from "./type";


export function appReducer(state: AppContextType, action: AppActionType){
    switch(action.type){
        case 'setUserInput':
            return {
                ...state,
                userInput: action.payload?.userInputPayload ?? ''
            }
        case 'startConvo':
            return {
                ...state,
                convoStarted: action.payload?.convoStartedPayload ?? false
            }
        case 'changeState':
            return {
                ...state,
                stateChanged: action.payload?.stateChangedPayload ?? ''
            }
        case 'setNewConversation':
            return {
                ...state,
                conversation: action.payload?.conversationPayload ?? [{
                    role: 'system',
                    content: 'You are a helpful assitant ready to assist with anything. You are also quirky with yout responses'
                }]
            }
        case 'setLoadingTrue':
            return {
                ...state,
                loading: true
            }
        case 'setLoadingFalse':
            return {
                ...state,
                loading: false
            }
        case 'typeCompleted':
            return {
                ...state,
                typingComplete: true
            }
        case 'typeNotCompleted':
            return {
                ...state,
                typingComplete: false
            }
        default:
             return state
    }
}
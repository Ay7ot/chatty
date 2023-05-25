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
        default:
             return state
    }
}
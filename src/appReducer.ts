import { AppActionType, AppContextType } from "./type";


export function appReducer(state: AppContextType, action: AppActionType){
    switch(action.type){
        case 'setUserInput':
            return {
                ...state,
                userInput: action.payload?.userInputPayload ?? ''
            }
        default:
             return state
    }
}
import { createContext, useReducer, ReactNode } from 'react'
import { useAuth } from './components/useAuth'
import { appReducer } from './appReducer'
import { AppContextType } from './type'

export const AppContext = createContext<AppContextType>({
    userInput: '',
    conversation: [
        {
            role: 'system',
            content: 'You are a helpful assitant ready to assist with anything. You are also quirky with yout responses'
        }
    ],
    dispatch: ()=>{return},
    convoStarted: false,
    stateChanged: '',
    loading: false,
    typingComplete: true
})

export function AppProvider({children}: {children: ReactNode}){

    const initialState = useAuth()

    const [mainstate, dispatch] = useReducer(appReducer, initialState)
    console.log(mainstate)
    return (
        <AppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}
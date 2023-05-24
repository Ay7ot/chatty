import { AppContext } from "../AppContext"
import {useContext} from 'react'

export const useAuth = () => {
    return useContext(AppContext)
}
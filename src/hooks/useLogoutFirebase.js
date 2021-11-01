import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogoutFirebase = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //signout
        try {
            await projectAuth.signOut()

            //dispatch logout action
            dispatch({type: 'LOGOUT', payload: null})

            setError(null)
            setIsPending(false)
        } 
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    
    return {logout, error, isPending}

}
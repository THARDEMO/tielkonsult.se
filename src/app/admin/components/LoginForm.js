'use client'

import { useFormState } from 'react-dom'
import { useRouter } from "next/navigation"

import { handleLogin } from "../../logic/state"
import { animatePageOut } from "../../utils/animation"



export const LoginForm = () => {

    const [ state, action ] = useFormState(handleLogin, undefined);
    const router = useRouter();
    
    if( state?.ok === true ) {
        animatePageOut('/admin', router);
    }

    return(
        <form action={action}>
            <input type='password' name='password' placeholder='Lösenord'></input>
            <button type='submit'>Logga In</button>
            {state?.message && <p>{state.message}</p>}
        </form>
    )

}

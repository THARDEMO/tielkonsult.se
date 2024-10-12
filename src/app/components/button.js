'use client'
import { Text } from "./text"
import { acceptCookie } from "../logic/state";
import { removeCookieBanner } from "../utils/animation";

import styles from './styles.module.css'


export const Button = ({ label, callbackType, type}) => {

    let callback;
    switch (callbackType) {
        case 'acceptCookie':
            callback = ()=>{
                acceptCookie();
                removeCookieBanner();
            }
            break;
        
        default:
            callback = ()=>{}
    }

    let button;

    switch( type ) {

        case 'form':
                button = <button type='submit'
                                 className='pd-16 pd-8-tb br-4 bg-blue'
                                 focusable 
                                 role='button'
                                 id={styles['submit-button']}>
                                <Text content={label} type='utility-small'/>
                         </button>

            break;
        
        default:
            button = <button onClick={callback} 
                             className='pd-32 pd-12-tb'
                             focusable 
                             role='button' 
                             id={styles['primary-button']}>
                             <Text content={label} type='utility'/>
                    </button>;
    }

    return button;

}
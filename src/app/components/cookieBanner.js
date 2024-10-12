'use server'

import { Text } from "./text"; 
import { Button } from "./button";
import { checkCookie } from '../logic/state';

import styles from './styles.module.css'

export const CookieBanner = async() => {

    const acceptedCookie = await checkCookie('accepted-functional-cookies');
    console.log( acceptedCookie, ' => cookie val');

    if( acceptedCookie !== undefined) return ''


    return (

        <div id={styles.cookieBanner} className="CookieBanner flex-item flex-justify-center pd-32 pd-32-tb full-width">
            <div className='flex-item flex-justify-sb flex-grow align-items-center'>
                <Text content='Denna hemsidan använder enbart funktionella cookies' type="01"/>
                <Button label='Acceptera & Stäng' callbackType='acceptCookie'/>
            </div>
        </div>

    );
}
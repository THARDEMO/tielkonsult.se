'use server'
import { cookies } from "next/headers";
import fetcher, { createRqst } from "./rqst";

const _state = {};
const apiPath = 'http://localhost:9999/';

export async function Get( context, refresh = false ) {
    if( refresh || !_state[context]) {
        const rqst = createRqst( `${apiPath}GET.php`, 'GET', `context=${context}`);
        const response = await fetcher( rqst);
        
        if(!response)return;

        if( !response.length) {_state[context] = [response]}
        else {_state[context] = response;}
    }    
    return _state[context];
}

export async function handleLogin( state, formdata ) {

    const password = formdata.get( 'password')

    const rqst = createRqst( `${apiPath}token/`, 'POST', {access_key:password});
    const response = await fetch( rqst);
    const result = await response.json();

    //display error
    if( !response.ok) return result
 
    setCookie('token', result);
    // deleteCookie_dev('token', result);
    return {
        ok:true,
        token:result
    }
}

// COOKIES 
async function getCookie(name) {return cookies().get(name)}
async function setCookie(name, value) {cookies().set(name, value, {sameSite:'lax'})}
export async function checkCookie(name) {return cookies().has(name)}
export async function deleteCookie_dev(name) {cookies().delete('token')}
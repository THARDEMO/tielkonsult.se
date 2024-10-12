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

export async function Post( state, formdata) {

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
async function getCookie(name) {
    const cookieStore = cookies();
    const cookie = cookieStore.get(`${name}`);
    return cookie;
}
async function setCookie(name, value) {cookies().set(name, value, {expires: Date.now() + 604800})}
export async function deleteCookie_dev(name) {cookies().delete('token')}
export async function acceptCookie() {
    setCookie('accepted-functional-cookies', Date.now());
}
export async function checkCookie(name) {
    return await getCookie(name);
    
    if( !getCookie(name)) return false;
    return true;
}

import PubSub from "./PubSub.js";

async function fetcher( rqst ) {
    try {
        const response = await fetch( rqst);
        const payload = await response.json();

        if( response.ok) return payload;

        PubSub.Pub({
            event: 'Fetcher::Error',
            detail: {status: response.status, message: payload.message},
        })

        // throw new Error( payload.message); //WORK ON THIS, PROBLEM: all errors become network PUBLISH

    } catch (error) {

        console.log( error.name)
        // Do Something 
        PubSub.Pub({
            event: 'Fetcher::NetworkError',
            detail: {message:'Network Error, please try again.'},
        });

        console.error( error);
    }

}


/**
 * 
 * @param {string} endpoint 
 * @param {string} method 
 * @param {Object} data 
 */
export function createRqst( endpoint, method, data, formData = false) {

    if( method === 'GET') return new Request( `${endpoint}?${data}`)

    return new Request( endpoint, {
        method: method,
        headers: {"Content-Type":"application/json"},
        body: !formData ? JSON.stringify(data) : data,
    });
}

export default fetcher;
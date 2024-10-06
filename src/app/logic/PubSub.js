const _listeners = {};
const _trowError = (e) => {throw new Error(e)}

const PubSub = {

    /**
     * 
     * @param {Object} Sub - Subscription method 
     * @param {string} event
     * @param {function} listener
     */
    Sub: ({ event, listener }) => {
        if( !event || !listener ) _trowError( 'Event or Listener must be defined');
        if( typeof listener !== 'function') _trowError( 'TypeError: listener must be a function');

        if( !_listeners[event]) _listeners[event] = [];
        _listeners[event] = [..._listeners[event], listener];

        verbose( `PubSub: new Subscription @ ${event}`);
    },

        /**
     * 
     * @param {Object} Pub - Publish method 
     * @param {string} event
     * @param {function} listener
     */
    Pub: ({ event, detail }) => {
        if( !event ) _trowError( 'Event must be defined');

        if(!_listeners[event]) return verbose( `PubSub: Published @ ${event} without any Subscriptions`);
        
        _listeners[event]?.forEach( sub => sub( detail ));

        verbose( `PubSub: Published @ ${event} with ${_listeners[event].length} Subscriptions`);
    }

}

function verbose(message) {
    let tape = false;
    if( tape) return;
    console.log( message);
}

export default PubSub;

// PubSub.Sub()
export const Text = ({content, type}) => {


    return <p className={`text-${type}`} >{content}</p>
}

export const Heading = ({content, type}) => {

    let element;

    switch( type) {
        case '01': 
            element = <h1 className='heading-01'>{content}</h1>
            break;
        case '02':
            element = <h2 className='heading-02'>{content}</h2>
            break;
        default:
            element = <Text_01 content={`Type Error::${type}`}/>
    }
 
    return element;
}
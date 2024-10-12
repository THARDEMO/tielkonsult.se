import { Text } from "./text";

export const Input = ({obj_key, data}) => {
    return (<>

        <label className='grid col-1fr'>
            <Text content={obj_key.replaceAll('_', ' ')} type='utility-small' />
            <input 
                className='pd-8 pd-8-tb bg-offwhite border-none bx-sdow' 
                type='text' 
                name={obj_key} 
                defaultValue={data} 
            />
        </label>
    
    </>);
}


{/* <label key={uuid()} for={key}>{key.replaceAll('_', ' ')}</label>
<input key={uuid()} type='text' name={key} defaultValue={data[key]} /> */}
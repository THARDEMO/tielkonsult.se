'use client'

import { useFormState } from 'react-dom';
import { v4 as uuid } from 'uuid'

import { Post } from "@/app/logic/state"
import { Button } from '@/app/components/button';
import { Input } from '@/app/components/input';


export const AdminForm = ({context, data}) => {
    
    const [ state, action ] = useFormState(Post, undefined);

    const keys = Object.keys( data);

    return (
        <form action={action} className='grid grid-1col gap-12 mrg-16'>
            <input type='hidden' name='context' value={context} />
            {keys.map(key=>{
                return (<Input key={uuid()} obj_key={key} data={data[key]}/>)
            })}
            <Button type='form' label='Spara'/>
        </form>
    );
}
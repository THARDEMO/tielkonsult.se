import { Get } from "@/app/logic/state"


export const ContactManager = async() => {

    const info = await Get( 'contact');
    const {mail, phone_nr} = info[info.length - 1];


    return (<div>{mail + ' ' + phone_nr}</div>)

}
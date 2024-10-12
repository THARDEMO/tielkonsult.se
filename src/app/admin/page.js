import { Text, Heading } from "../components/text";
import { LoginForm } from "./components/LoginForm";
import { checkCookie, Get } from "../logic/state";

import { AdminForm } from "./components/adminForm";
import { OptionsContainer } from "./components/optionsContainer";


const Admin = async() => {
    
    if( !await checkCookie('token')) {
        return (<>
            <Heading content='Logga In' type='01'/>
            <Text content='Logga in för att få tillgång till adminpage' type='01' />
            <LoginForm />
        </>);
    }

    const _contact = await Get( 'contact');
    const contact = _contact[_contact.length - 1];
    

    return(<>
        <Heading content='Admin' type='01'/>
        
        <div id='admin-root' className='grid grid-2col gap-32 pd-16 pd-8-tb'>

            <OptionsContainer context='Kontakt Information'>
                <AdminForm context='contact' data={contact}/>
            </OptionsContainer>

        </div>

    </>);   


}

export default Admin;
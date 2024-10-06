import { Text, Heading } from "../components/text";
import { LoginForm } from "../components/LoginForm";
import { checkCookie, Get } from "../logic/state";

import { ContactManager } from "./components/contact";


const Admin = async() => {
    
    const status = await checkCookie('token');

    //SHOW LOGIN PAGE
    if( !status) {
        return (<>
            <Heading content='Logga In' type='01'/>
            <Text content='Logga in för att få tillgång till adminpage' type='01' />
            <LoginForm />
        </>);
    }


    return(<>
        <Heading content='Admin' type='01'/>
        <ContactManager />
    </>);   


}

export default Admin;
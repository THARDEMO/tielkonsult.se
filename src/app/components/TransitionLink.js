'use client'
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animation"
import { Text } from "./text";
import Link from "next/link";


const TransitionLink = ({href, label}) => {
    const router = useRouter();
    const pathname = usePathname();

    const active = pathname === href ? 'active-link' : '';

    const handleClick = (e) => {
        e.preventDefault();
        if(active) return;
        animatePageOut( href, router);
    }

    return( 
        <Link role='link' onClick={handleClick} href={href} className={`internal-link ${active}`}>
            <Text content={label} type='utility'/>
        </Link>
    );
}

export default TransitionLink;
'use client'
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animation"
import Link from "next/link";


const TransitionLink = ({href, label}) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e) => {
        e.preventDefault();
        if( pathname === href) return;
        animatePageOut( href, router);
    }

    return( <Link onClick={handleClick} href={href}>{label}</Link>)
}

export default TransitionLink;
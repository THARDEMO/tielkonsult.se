'use client'
import '@/app/css/drape.css';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { useEffect } from 'react';
import { animatePageIn } from './utils/animation';

export default function Template({children}) {

    useEffect(() => {
        animatePageIn()
    }, [])

    return ( 
        <div>
            <div id='transition-drape' className='transition-drape bg-color'></div>
        
            {children}
        </div>
    )
}
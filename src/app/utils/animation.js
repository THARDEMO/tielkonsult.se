import gsap from "gsap";

const getDrape = () => document.getElementById( 'transition-drape');

export const animatePageIn = () => {
    const drape = getDrape();

    if( !drape) return;

    const timeline = gsap.timeline();
    timeline.set(drape, {opacity:1}).to(drape, {opacity:0, zIndex:-1});
}

export const animatePageOut = ( href, router ) => {
    const drape = getDrape();

    if( !drape) return;
    
    const timeline = gsap.timeline();    
    timeline.set(drape, {opacity:0})
            .to(drape, {opacity:1, zIndex:10, onComplete: () => router.push(href) });
    
}
import TransitionLink from "./TransitionLink";

export const Nav = () => {
    return (
        <nav className='full-width flex-item flex-justify-end pd-72 pd-32-tb gap-24'>
            <TransitionLink href='/' label='Home'/>
            <TransitionLink href='/projekt' label='Projekt'/>
        </nav>
    );
}
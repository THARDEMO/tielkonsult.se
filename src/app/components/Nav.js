import TransitionLink from "./TransitionLink";

export const Nav = () => {
    return (
        <nav className='full-width flex-item flex-justify-end pd-72 mrg-24 gap-18'>
            <TransitionLink href='/' label='Home'/>
            <TransitionLink href='/projekt' label='Projekt'/>
        </nav>
    );
}
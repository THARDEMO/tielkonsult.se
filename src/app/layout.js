import "./globals.css";
import TransitionLink from "./components/TransitionLink";

export const metadata = {
  title: 'TiElkonsult AB'
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        <nav>
          <TransitionLink href='/' label='Home'/>
          <TransitionLink href='/projekt' label='Projekt'/>

        </nav>

        {children}
      </body>
    </html>
  );
}

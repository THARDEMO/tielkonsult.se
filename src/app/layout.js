
import "./globals.css";
import { Nav } from "./components/Nav";
import { CookieBanner } from "./components/cookieBanner";

export const metadata = {
  title: 'Ti Elkonsult AB',
  description: 'Elkonsult i Skåne, Svedala. RISE certifierad konsult.'
}

export default async function RootLayout({ children }) {


  return (
    <html lang="sv">
      <body>

        <Nav />

        <div id="root" >
          {children}
        </div>

        <CookieBanner />
      </body>
    </html>
  );
}

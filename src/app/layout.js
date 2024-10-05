import "./globals.css";
import { Nav } from "./components/Nav";

export const metadata = {
  title: 'Ti Elkonsult AB',
  description: 'Elkonsult i Skåne, Svedala. RISE certifierad konsult.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>

        <Nav />

        <div id="root" >
          {children}
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from '@/components/Store/Header/Navbar';

export const metadata = {
  title: 'Bonsite',
  description: 'The go-to website for all your bonsai needs!'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>

        <link rel='icon' href="https://www.svgrepo.com/show/276833/bonsai.svg"></link>

      </head>

      <body>

      {children}
      
      </body>

    </html>
  );
}


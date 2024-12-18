import "../globals.css";
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
    <>

        <Navbar></Navbar>

        {children}

    </>
  )
}


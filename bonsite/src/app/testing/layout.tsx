import "../..//app/globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'Bonsite | Testing',
  description: 'Testing area of Bonsite'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div>

        <div className="text-center w-screen font-mono mt-20">
            <h1>Bonsite | Dev</h1>
            <h2>Testing Area</h2>
            <Link href="/testing"><button className="p-0 simpleButton">Testing Menu</button></Link>
        </div>

        {children}

    </div>

  );
}

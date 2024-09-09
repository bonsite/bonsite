import "../app/globals.css";

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
      <head></head>
      <body>{children}</body>
    </html>
  );
}


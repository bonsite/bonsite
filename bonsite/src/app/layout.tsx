import "../app/globals.css";

export const metadata = {
  title: 'Bonsite',
  description: 'The go-to website for all your bonsai needs!'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html>
          <head></head>
          <body>{children}</body>
      </html>
  );
}

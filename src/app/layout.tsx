import "./globals.css";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx"; // Assuming you have this logo component in the correct path

export const metadata = {
  title: 'Bonsite',
  description: 'The go-to website for all your bonsai needs!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.svgrepo.com/show/276833/bonsai.svg" />
      </head>
      <body>
        {/* Navbar */}
        <Navbar position="static" isBordered css={{ backgroundColor: "#2F4F2F", color: "white" }}>
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit text-white">Bonsite</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="#" css={{ color: "#90EE90" }}> {/* Light green for Features */}
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" css={{ color: "#228B22" }}> {/* Dark green for active link */}
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" css={{ color: "#90EE90" }}> {/* Light green for Integrations */}
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#" css={{ color: "#90EE90" }}>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat" css={{ backgroundColor: "#228B22", color: "white" }}>
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        {/* Main Content */}
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}

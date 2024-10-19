
import Navigations from "./components/Navigations";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navigations/>
        {children}
      </body>
    </html>
  );
}

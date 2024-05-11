import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BooststrapClient";
import NavBar from "./components/Navbar";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";

export const metadata: Metadata = {
  title: "Loja online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <NavBar />
          {children}
          <BootstrapClient />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}

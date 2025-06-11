import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar";
import "./globals.css";
export const metadata = {
  title: "CoSolar",
  description: "Empresa de energía solar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=imagesearch_roller"
        />
      </head>

      <body>
        <nav>
          <NavBar />
        </nav>
        {children}
        <footer className="syle-footer">Footer</footer>
      </body>
    </html>
  );
}

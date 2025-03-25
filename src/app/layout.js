import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "./Context/ProductContext";
import { UserProvider } from "./Context/UserContext";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>

        <ProductProvider>
        <Navbar/>
        <ToastContainer />

        {children}
        </ProductProvider>
        </UserProvider>
      </body>
    </html>
  );
}

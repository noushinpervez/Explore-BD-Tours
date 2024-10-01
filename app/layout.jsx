import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Home",
  description: "Explore BD Tours",
  keywords: "tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${dmSans.variable} antialiased` }>
        <Navbar />
        <main>{ children }</main>
      </body>
    </html>
  );
}
import { DM_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Home - Explore BD Tours",
  description: "Explore BD Tours and find the best tours in Bangladesh.",
  keywords: ["BD tours", "Bangladesh", "travel", "vacation"],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${dmSans.variable} ${robotoSlab.variable} antialiased` }>
        <Navbar />
        <main>{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
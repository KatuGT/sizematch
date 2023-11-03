import Topbar from "@/Components/TopBar/TopBar";
import "./globals.css";
import { Inter } from "next/font/google";
import BottomBar from "@/Components/BottomBar/BottomBar";
import { SharedValuesProvider } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SelectedPartProvider } from "@/Context/SelectedPartContext/SelectedPartContext";
import LogRocket from "logrocket";
import AuthProvider from "@/Components/AuthProvider";
import { Metadata } from "next";
import CookiesCoscent from "@/Components/CookiesConsent";
import GoogleAnalitycs from "@/Components/GoogleAnalitycs";
const inter = Inter({ subsets: ["latin"] });
LogRocket.init("ozqtga/sizematch");

export const metadata: Metadata = {
  metadataBase: new URL("https://sizematch.net"),
  title: "Size Match",
  description:
    "Effortlessly Find Motorcycle Parts – Input Size, Reveal Code, Get the Right Fit! Hassle-Free Spare Part Discovery for Your Bike's Perfect Match.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalitycs
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />
        <meta name="google-site-verification" content="jeAwxEi3dXKu6vBYuxPbRIoM7iFYUVhd1r8FDW3r6nc" />
        <link rel="icon" href="favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6233124551272393"
          crossOrigin="anonymous"
        ></script>
        
      </head>

      <AuthProvider>
        <SharedValuesProvider>
          <SelectedPartProvider>
            <body className={inter.className}>
              <div className="relative flex min-h-screen flex-col justify-between bg-gray-900">
                <Topbar />
                {children}
                <BottomBar />
              </div>
              <CookiesCoscent />
            </body>
          </SelectedPartProvider>
        </SharedValuesProvider>
      </AuthProvider>
    </html>
  );
}

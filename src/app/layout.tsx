import Topbar from "@/Components/TopBar/TopBar";
import "./globals.css";
import { Inter } from "next/font/google";
import BottomBar from "@/Components/BottomBar/BottomBar";
import { SharedValuesProvider } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SelectedPartProvider } from "@/Context/SelectedPartContext/SelectedPartContext";
import LogRocket from "logrocket";
import AuthProvider from "@/Components/AuthProvider";
import { Metadata } from "next";
import CookiesConcent from "@/Components/CookiesConcent";
import GoogleAnalitycs from "@/Components/GoogleAnalitycs";
const inter = Inter({ subsets: ["latin"] });
LogRocket.init("ozqtga/sizematch");

export const metadata: Metadata = {
  title: "Size Match",
  description:
    "Find Your Perfect Fit! Input the Size, Discover the Code. Get the Right Spare Part Hassle-Free.",
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
        <link rel="icon" href="favicon.ico" />
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
              <CookiesConcent />
            </body>
          </SelectedPartProvider>
        </SharedValuesProvider>
      </AuthProvider>
    </html>
  );
}

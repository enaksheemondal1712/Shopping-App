import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <AppContextProvider>
            <Toaster />
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
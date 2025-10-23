import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Rental Web",
  description: "Landlord dashboard for rental properties",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

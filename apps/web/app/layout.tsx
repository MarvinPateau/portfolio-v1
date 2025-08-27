import "../styles/globals.css";
import type { ReactNode } from "react";
import { Analytics } from "../lib/analytics";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabMemory — Find Memory-Hogging Browser Tabs Automatically",
  description:
    "Browser extension that monitors tab memory usage and alerts when tabs consume excessive RAM. Perfect for developers, designers, and researchers with tab-heavy workflows."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="c30804ae-a2d2-475f-b7f6-dab0e4d770fc"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

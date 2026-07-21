import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  // every font-serif in the app is italic; loading the roman is 15KB wasted
  style: "italic",
});

export const metadata: Metadata = {
  title: "PARE Mibienpan Joseph — Software Developer",
  description:
    "Software developer from Burkina Faso. I build AI-powered products end to end — Go CLIs, terminal UIs, and full-stack web apps.",
  metadataBase: new URL("https://mibienpan.me"),
  openGraph: {
    title: "PARE Mibienpan Joseph — Software Developer",
    description:
      "Software developer from Burkina Faso. I build AI-powered products end to end.",
    url: "https://mibienpan.me",
    siteName: "PARE Mibienpan Joseph",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

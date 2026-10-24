import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Kayu Mebel Indonesia | Furniture Manufacturer & Exporter Sidoarjo",
  description:
    "Leading manufacturer and exporter of quality indoor and outdoor furniture based in Sidoarjo, East Java, Indonesia.",
  keywords: [
    "PT Kayu Mebel Indonesia",
    "Furniture Manufacturer Sidoarjo",
    "Furniture Factory East Java",
    "OEM Furniture Indonesia",
    "Teak Furniture Indonesia",
    "Outdoor Furniture Sidoarjo",
    "Private Label Furniture",
  ],
  icons: {
    icon: "/logo-kmi.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="font-sans bg-white text-[#111827] antialiased selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}

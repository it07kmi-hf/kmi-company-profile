import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/ppneuemontreal-book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ppneuemontreal-italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/ppneuemontreal-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ppneuemontreal-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
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
      className={`${neueMontreal.variable} scroll-smooth`}
    >
      <body className={`${neueMontreal.className} font-sans bg-white text-[#111827] antialiased selection:bg-amber-100 selection:text-amber-900`}>
        {children}
      </body>
    </html>
  );
}

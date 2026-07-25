import type { Metadata } from "next";
import "./globals.css";
import { doctorData } from "@/constants/doctorData";

export const metadata: Metadata = {
  title: 'Dr. Vijay Ganesh | Official Website',
  description: 'Official website of Dr. Vijay Ganesh. Specialist at Aster Hospitals Bangalore. View profile, medical expertise, and contact details.',
  keywords: [
    "Pediatric Surgeon",
    "Neonatal Surgery",
    "Laparoscopic Keyhole Surgery",
    "Pediatric Urology",
    "Congenital Anomalies Reconstructive",
    "Child Doctor Specialist",
    doctorData.name,
  ],
  authors: [{ name: `Dr ${doctorData.name}` }],
  metadataBase: new URL("https://drvijayganesh.com"),
  alternates: {
    canonical: 'https://drvijayganesh.com',
  },
  verification: {
    google: 'BFEt3QWZ1gUCD8m7czeF-Cq1WqbYb-v0iPdHCxTAgoU',
  },
  openGraph: {
    title: 'Dr. Vijay Ganesh | Official Website',
    description: 'Official website of Dr. Vijay Ganesh. Specialist at Aster Hospitals Bangalore. View profile, medical expertise, and contact details.',
    url: "/",
    siteName: `Dr ${doctorData.name} Practice`,
    locale: "en_US",
    type: "profile",
    firstName: "Pediatric",
    lastName: "Surgeon",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Dr. Vijay Ganesh | Official Website',
    description: 'Official website of Dr. Vijay Ganesh. Specialist at Aster Hospitals Bangalore. View profile, medical expertise, and contact details.',
    creator: `@${doctorData.name.replace(/\s+/g, "")}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject structured JSON-LD data for Google SEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Vijay Ganesh",
    "url": "https://drvijayganesh.com",
    "sameAs": [
      "https://in.linkedin.com/in/dr-vijay-ganesh-sankar-633b92288",
      "https://www.asterhospitals.in/doctors/aster-women-children-bangalore-aster-rv-bangalore/dr-s-vijay-ganesh"
    ],
    "jobTitle": "Doctor",
    "affiliation": {
      "@type": "Hospital",
      "name": "Aster Hospitals"
    }
  };

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col scroll-smooth">
        {children}
      </body>
    </html>
  );
}

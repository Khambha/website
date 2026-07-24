import type { Metadata } from "next";
import "./globals.css";
import { doctorData } from "@/constants/doctorData";

export const metadata: Metadata = {
  title: `Dr ${doctorData.name} | ${doctorData.title}`,
  description: `Consult Dr ${doctorData.name}, a board-certified ${doctorData.title}. Specializing in advanced neonatal surgery, laparoscopic keyhole procedures, and pediatric urology.`,
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
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Dr ${doctorData.name} | ${doctorData.title}`,
    description: `Consult Dr ${doctorData.name}, a board-certified ${doctorData.title}. Specializing in advanced neonatal surgery, laparoscopic keyhole procedures, and pediatric urology.`,
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
    title: `Dr ${doctorData.name} | ${doctorData.title}`,
    description: `Consult Dr ${doctorData.name}, a board-certified ${doctorData.title}. Specializing in advanced neonatal surgery, laparoscopic keyhole procedures, and pediatric urology.`,
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
    "name": `Dr ${doctorData.name}`,
    "image": "https://example.com/doctor-placeholder.jpg",
    "description": doctorData.aboutText,
    "medicalSpecialty": "PediatricSurgery",
    "telephone": doctorData.contactPhone,
    "email": doctorData.contactEmail,
    "url": "https://example.com",
    "knowsAbout": doctorData.treatments.map((t) => t.title),
    "award": doctorData.awards.map((a) => a.title),
    "memberOf": [
      {
        "@type": "MedicalOrganization",
        "name": "National Board of Medical Specialties"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aster Women & Children Hospital, Whitefield",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560066",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
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

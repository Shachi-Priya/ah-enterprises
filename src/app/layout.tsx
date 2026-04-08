import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A&H Enterprises — Premium Construction & Structural Engineering',
  description:
    "India's trusted partner for structural strengthening, fibre wrapping, waterproofing, grouting, and advanced civil engineering solutions. GST: 09ACAFA3497M1ZY | Greater Noida.",
  icons: {
    icon: '/company-logo.png',
    shortcut: '/company-logo.png',
    apple: '/company-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

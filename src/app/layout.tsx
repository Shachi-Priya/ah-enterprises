import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

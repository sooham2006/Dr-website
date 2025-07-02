import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles',
  description: 'Licensed Clinical Psychologist providing compassionate, evidence-based therapy for anxiety, relationship counseling, and trauma recovery in Los Angeles, CA. Virtual and in-person sessions available.',
  keywords: 'psychologist, therapy, counseling, anxiety, trauma, relationships, Los Angeles, mental health',
  openGraph: {
    title: 'Dr. Serena Blake, PsyD - Clinical Psychologist',
    description: 'Compassionate, evidence-based therapy for anxiety, relationships, and trauma recovery.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Launch countdown timer',
  description:
    'A responsive launch countdown timer featuring real-time updates, animated countdown cards, and a modern design built as a Frontend Mentor challenge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatText.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

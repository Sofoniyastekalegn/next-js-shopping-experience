import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          {children}
        </body>
      </CartProvider>
    </html>
  );
}

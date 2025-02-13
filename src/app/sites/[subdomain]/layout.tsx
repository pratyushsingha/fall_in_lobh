import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonjure Valentine!!! 🫶",
  description: "Will You Be My Valentine",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

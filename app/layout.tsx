import "./globals.css";
export const metadata = {
  title: "Book App",
  description: "VINS SSR Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

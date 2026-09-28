import "./globals.css";

export const metadata = {
  title: "IHSB STEM FEST — Demo Redesign",
  description: "Concept redesign for IHSB STEM FEST"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
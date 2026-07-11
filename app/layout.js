import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "FX Checker",
  description: "Live currency exchange dashboard",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-300 text-slate-900 flex flex-col transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
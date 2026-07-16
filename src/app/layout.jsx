import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AuthGuard from "@/components/auth-guard";

export const metadata = {
  title: "Property Management",
  description: "Property Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />

        <AuthGuard>{children}</AuthGuard>

        <Footer />
      </body>
    </html>
  );
}

import { Navbar, Footer, Sidebar } from "@/components";
import "./globals.css"
export const metadata = {
  title: "Graphix",
  description:
    "Share, collaborate, and unleash your creativity on our design platform.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex p-6 gap-6">
          <Sidebar />
          <main className=" flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

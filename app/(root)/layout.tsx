import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <div className="flex h-screen flex-col">
   <Header />
   <main className="flex-1 md:px-20">{children}</main>
   <Footer />
  </div>
 )
}
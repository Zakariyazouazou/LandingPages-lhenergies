import type React from "react"
import "./globals.css"
import { Inter, Cairo } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic"] })




const discription: string = `Optimisez l'efficacité énergétique de votre habitation avec LH Energies, 
votre partenaire de choix pour des solutions durables et économiques. Experts en rénovation énergétique complète, nous déployons des technologies avancées telles que les pompes à chaleur de dernière génération, 
pour accroître votre confort tout en réduisant significativement votre impact environnemental.`

export const metadata: Metadata = {
  title: "LH ENERGIES",
  description: discription,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph:{
     images:['https://lhenergies.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2ca9d483.webp&w=256&q=75']
  }
};


export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "fr" }, { lang: "en" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isRTL = lang === "ar"

  return (
    <html lang={lang} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={lang === "ar" ? cairo.className : inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

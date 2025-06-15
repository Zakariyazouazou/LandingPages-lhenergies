import { getDictionary } from "./dictionaries"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Palette, Minimize2, Cpu, Building2, Heart, Briefcase, ArrowRight, Code, Zap } from "lucide-react"
import Link from "next/link"

const landingDesigns = [
  {
    key: "modern_solar",
    icon: Monitor,
    href: "https://energie.lhenergies.fr/",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    link:"https://i.imgur.com/l355jf0.png"  , 
  },
  {
    key: "premium_heating",
    icon: Palette,
    href: "https://services.lhenergies.fr/",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500",
    link:"https://i.imgur.com/oePyi62.png"  , 
  },
  {
    key: "minimalist_insulation",
    icon: Minimize2,
    href: "https://solutions.lhenergies.fr/",
    color: "bg-gray-500",
    gradient: "from-gray-500 to-slate-500",
    link:"https://i.imgur.com/yneBkSL.png"  , 
  },
  {
    key: "tech_smart",
    icon: Cpu,
    href: "https://renovation.lhenergies.fr/",
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-500",
    link:"https://i.imgur.com/BAaTot4.png"  , 
  },
  {
    key: "corporate_renovation",
    icon: Building2,
    href: "https://renov.lhenergies.fr/",
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-blue-600",
    link:"https://i.imgur.com/yFvsgqp.png"  , 
  },
  {
    key: "friendly_consultation",
    icon: Heart,
    href: "https://eco.lhenergies.fr/",
    color: "bg-rose-500",
    gradient: "from-rose-500 to-pink-500",
    link:"https://i.imgur.com/bkGAJNU.png"  , 
  }
]

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "ar" | "fr" | "en" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const isRTL = lang === "ar"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-green-400 flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">Developer Portfolio</span>
              <p className="text-sm text-muted-foreground">LH Energies Landing Pages</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${lang}`} className="hover:text-primary transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}#portfolio`} className="hover:text-primary transition-colors">
              {dict.nav.portfolio}
            </Link>
            {/* <Link href={`/${lang}#about`} className="hover:text-primary transition-colors">
              {dict.nav.about}
            </Link>
            <Link href={`/${lang}#contact`} className="hover:text-primary transition-colors">
              {dict.nav.contact}
            </Link> */}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">{dict.developer.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{dict.hero.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{dict.hero.subtitle}</p>
            <p className="text-lg text-muted-foreground/80 mb-8">{dict.developer.subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="brand-green hover:brand-green-hover text-white px-8 py-6 text-lg" asChild>
              <Link href={`/${lang}#portfolio`}>
                {dict.hero.cta}
                <ArrowRight className={`h-5 w-5 ml-2 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </Button>
            {/* <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              {dict.hero.learn_more}
            </Button> */}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.portfolio.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{dict.portfolio.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {landingDesigns.map((design) => {
              const IconComponent = design.icon
              const designData = dict.landing_designs[design.key as keyof typeof dict.landing_designs]

              return (
                <Card
                  key={design.key}
                  className="group hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border-0 shadow-lg"
                >
                  <Link href={design.href}>
                  <div className={`h-32 relative overflow-hidden  `} style={{ backgroundImage: `url(${design.link})` , 
                       backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                   }}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {designData.style}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {designData.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{designData.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                          <span>{"View Design"}</span>
                          <ArrowRight
                            className={`h-4 w-4 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`}
                          />
                        </div>
                        <div className={`w-3 h-3 rounded-full ${design.color}`}></div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-green-400 flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">{dict.footer.developer}</span>
                <p className="text-sm text-muted-foreground">LH Energies Projects</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 {dict.footer.rights}</span>
              <div className="flex gap-4">
                <Link href={`/${lang}/privacy`} className="hover:text-primary transition-colors">
                  {dict.footer.privacy}
                </Link>
                <Link href={`/${lang}/terms`} className="hover:text-primary transition-colors">
                  {dict.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Journey } from "@/components/journey"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Feedback } from "@/components/feedback"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Feedback />
      <Footer />
    </main>
  )
}
